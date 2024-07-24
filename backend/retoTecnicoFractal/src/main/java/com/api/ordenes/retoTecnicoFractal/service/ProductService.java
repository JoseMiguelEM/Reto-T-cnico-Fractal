package com.api.ordenes.retoTecnicoFractal.service;

import com.api.ordenes.retoTecnicoFractal.model.Product;
import com.api.ordenes.retoTecnicoFractal.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> findAll() {
        //show only active products
        return productRepository.findAllByActiveTrue();
    }

    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }

    public Product save(Product product) {
        return productRepository.save(product);
    }

    public void deleteById(Long id) {
        //Logical delete
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            Product productToDelete = product.get();
            productToDelete.setActive(false);
            productRepository.save(productToDelete);
        }
    }
}
