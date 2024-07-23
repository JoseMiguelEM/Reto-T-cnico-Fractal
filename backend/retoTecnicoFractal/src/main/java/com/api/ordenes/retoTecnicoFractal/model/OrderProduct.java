package com.api.ordenes.retoTecnicoFractal.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "order_product")
public class OrderProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private int quantity;

    // Constructor, getters y setters
    public OrderProduct() {}

    public OrderProduct(Order order, Product product) {
        this.order = order;
        this.product = product;
        this.quantity = 1;
    }
}
