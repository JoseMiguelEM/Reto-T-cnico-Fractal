package com.api.ordenes.retoTecnicoFractal.repository;

import com.api.ordenes.retoTecnicoFractal.model.Order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findAllByActiveTrue();
}
