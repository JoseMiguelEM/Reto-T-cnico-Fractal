package com.api.ordenes.retoTecnicoFractal.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "orders") // Cambiar el nombre de la tabla para evitar conflictos con palabras reservadas
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String number;
    private String status;
    private String date;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<OrderProduct> orderProducts = new HashSet<>();

    private double total;

    // Métodos adicionales para agregar y remover productos
    public void addProduct(Product product) {
        OrderProduct orderProduct = new OrderProduct(this, product);
        orderProducts.add(orderProduct);
    }

    public void removeProduct(Product product) {
        orderProducts.removeIf(op -> op.getProduct().equals(product) && op.getOrder().equals(this));
    }
}
