package com.api.ordenes.retoTecnicoFractal.repository;

import com.api.ordenes.retoTecnicoFractal.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
