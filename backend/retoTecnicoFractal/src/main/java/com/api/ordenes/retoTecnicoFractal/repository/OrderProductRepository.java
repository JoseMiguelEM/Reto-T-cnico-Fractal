package com.api.ordenes.retoTecnicoFractal.repository;

import com.api.ordenes.retoTecnicoFractal.model.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderProductRepository extends JpaRepository<OrderProduct, Long> {
}
