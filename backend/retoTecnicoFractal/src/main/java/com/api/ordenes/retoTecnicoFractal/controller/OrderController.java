package com.api.ordenes.retoTecnicoFractal.controller;

import com.api.ordenes.retoTecnicoFractal.model.Order;
import com.api.ordenes.retoTecnicoFractal.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Optional<Order> order = orderService.findById(id);
        return order.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @ResponseStatus(code = HttpStatus.CREATED)
    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return orderService.save(order);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order orderDetails) {
        System.out.println("Estamos en updateOrder");
        // System.out.println("=============================");
        // System.out.println("=============================");
        // System.out.println("=============================");
        Optional<Order> order = orderService.findById(id);
        System.out.println("orderDetails: " + order);
        if (order.isPresent()) {
            // System.out.println("Se ingresó al if");
            Order updatedOrder = order.get();
            updatedOrder.setNumber(orderDetails.getNumber());
            updatedOrder.setStatus(orderDetails.getStatus());
            updatedOrder.setDate(orderDetails.getDate());
            updatedOrder.setTotal(orderDetails.getTotal());
            return ResponseEntity.ok(orderService.update(updatedOrder));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        System.out.println("Se ingreso para eliminar una orden");
        orderService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
