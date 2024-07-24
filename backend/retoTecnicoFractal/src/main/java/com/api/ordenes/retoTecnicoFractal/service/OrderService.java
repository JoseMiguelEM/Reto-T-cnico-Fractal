package com.api.ordenes.retoTecnicoFractal.service;

import com.api.ordenes.retoTecnicoFractal.model.Order;
import com.api.ordenes.retoTecnicoFractal.model.OrderProduct;
import com.api.ordenes.retoTecnicoFractal.repository.OrderProductRepository;
import com.api.ordenes.retoTecnicoFractal.repository.OrderRepository;
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
        return orderRepository.save(order);
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
}
