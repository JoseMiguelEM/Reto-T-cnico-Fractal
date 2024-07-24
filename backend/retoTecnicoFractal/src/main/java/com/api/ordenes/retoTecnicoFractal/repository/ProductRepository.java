package com.api.ordenes.retoTecnicoFractal.repository;

import com.api.ordenes.retoTecnicoFractal.model.Product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
    List<Product> findAllByActiveTrue();
}
