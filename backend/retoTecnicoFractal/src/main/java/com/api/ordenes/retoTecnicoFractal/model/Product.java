package com.api.ordenes.retoTecnicoFractal.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Getter
@Setter
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double unitPrice;
    private Boolean active;


    public Product(String name, Double unitPrice) {
        this.name = name;
        this.unitPrice = unitPrice;
        this.active = true;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", unitPrice=" + unitPrice +
                '}';
    }
}
