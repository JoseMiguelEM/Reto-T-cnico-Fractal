package com.api.ordenes.retoTecnicoFractal.service;

import com.api.ordenes.retoTecnicoFractal.model.Order;
import com.api.ordenes.retoTecnicoFractal.model.OrderProduct;
import com.api.ordenes.retoTecnicoFractal.repository.OrderProductRepository;
import com.api.ordenes.retoTecnicoFractal.repository.OrderRepository;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderProductRepository oPRepository;

    public List<Order> getAllOrders() {
        List<Order> orders = orderRepository.findAllByActiveTrue();
        orders.forEach(order -> order.getOrderProducts().size()); // Trigger loading of products
        return orders;
    }

    public List<Order> findAll() {
        // return orderRepository.findAll();
        return orderRepository.findAllByActiveTrue();
    }

    public Optional<Order> findById(Long id) {
        return orderRepository.findById(id);
    }

    public Order save(Order order) {
        //First, save the order
        System.out.println("order: " + order);
        // Separamos la lista de productos de la orden
        Set<OrderProduct> aux =order.getOrderProducts();
        order.setOrderProducts(null);
        System.out.println("order: " + order.getTotal());
        // Guardamos orden
        Order orderAux = orderRepository.save(order);
        // Guardamos relacion entre orden y productos
        System.out.println("Lista de productos es: "+ aux);
        aux.forEach(orderProduct -> {
            System.out.println("Esto es un producto: "+ orderProduct.getId());
            OrderProduct relacion = new OrderProduct(orderAux, orderProduct.getProduct(), orderProduct.getQuantity(), orderProduct.getPrice());
            oPRepository.save(relacion);
            orderProduct.setOrder(orderAux);
        });

        return orderAux;
    }

    public Order update(Order order) {
        // Fetch the current order from the database
        Optional<Order> existingOrder = orderRepository.findById(order.getId());
        
        Set<OrderProduct> listaProductos = new java.util.HashSet<>();
        for(OrderProduct orderProduct: order.getOrderProducts()){
            listaProductos.add(orderProduct);
        }
        System.out.println("Lista de productos: "+ listaProductos.size());
        
        if (existingOrder.isPresent()) {
            System.out.println("===============================");
            System.out.println("===============================");
            System.out.println("===============================");
            System.out.println("===============================");
            Order orderToUpdate = existingOrder.get();
            System.out.println("Tenemos la orden a actualizar: "+ orderToUpdate.getId());
            System.out.println("Tenemos la orden a actualizar: "+ orderToUpdate.getTotal());

            orderToUpdate.setTotal(order.getTotal());
            orderToUpdate.setNumber(order.getNumber());
            orderToUpdate.setStatus(order.getStatus());
            orderToUpdate.setDate(order.getDate());

            // Clear existing OrderProduct relationships
            Set<OrderProduct> existingOrderProducts = orderToUpdate.getOrderProducts();
            if (existingOrderProducts != null) {
                existingOrderProducts.forEach(orderProduct -> {
                    oPRepository.delete(orderProduct);
                    System.out.println("Producto eliminado: " + orderProduct.getId());
                });
                orderToUpdate.getOrderProducts().clear();
            }

            // Save the order without OrderProducts first
            Order savedOrder = orderRepository.save(orderToUpdate);
            System.out.println("Orden guardada sin productos: " + savedOrder.getId());

            // Add new OrderProduct relationships
            if (listaProductos != null) {
                System.out.println("Productos a añadir: " + listaProductos.size());
                listaProductos.forEach(orderProduct -> {
                    OrderProduct newOrderProduct = new OrderProduct(savedOrder, orderProduct.getProduct(), 
                    orderProduct.getQuantity(), orderProduct.getPrice());
                    System.out.println("Los ids de la orderProduct es: "+ newOrderProduct.getOrder().getId() + " - "+ newOrderProduct.getProduct().getId());
                    oPRepository.save(newOrderProduct);
                    savedOrder.getOrderProducts().add(newOrderProduct);
                    System.out.println("Producto añadido: " + newOrderProduct.getId());
                });
            }

            // Save the order with new OrderProducts
            return orderRepository.save(savedOrder);
        } else {
            throw new EntityNotFoundException("Order not found with id " + order.getId());
        }
    }

    public void deleteById(Long id) {
        //Logical delete
        Optional<Order> order = orderRepository.findById(id);
        System.out.println("order: " + order); 
        if (order.isPresent()) {
            Order orderToDelete = order.get();
            System.out.println("La orden a borrar es: "+ orderToDelete.getId());
            orderToDelete.setActive(false);
            // System.out.println("");
            orderRepository.save(orderToDelete);
        }
    }
    //delete a product from an order
    public void deleteProductFromOrder(Long id, Long idProduct) {
        Optional<Order> order = orderRepository.findById(id);
        if (order.isPresent()) {
            Order orderToDelete = order.get();
            orderToDelete.getOrderProducts().removeIf(orderProduct -> orderProduct.getId().equals(idProduct));
            orderRepository.save(orderToDelete);
        }
    }
}
