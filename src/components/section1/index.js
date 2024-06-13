"use client";
import React from 'react';
import ProductSlider from '../ProdutSlider';

const products2 = [
    { id: 1, label: "Product 1", price: "5,20 €", image: "/assets/images/product.jpeg" },
    { id: 2, label: "Product 2", price: "5,20 €", image: "/assets/images/product.jpeg" },
    { id: 3, label: "Product 3", price: "5,20 €", image: "/assets/images/product.jpeg" },
    { id: 4, label: "Product 4", price: "5,20 €", image: "/assets/images/product.jpeg" },
    { id: 5, label: "Product 5", price: "5,20 €", image: "/assets/images/product.jpeg" },
    { id: 6, label: "Product 6", price: "5,20 €", image: "/assets/images/product.jpeg" },
    { id: 7, label: "Product 7", price: "5,20 €", image: "/assets/images/product.jpeg" },
    { id: 8, label: "Product 8", price: "5,20 €", image: "/assets/images/product.jpeg" },
    { id: 9, label: "Product 9", price: "5,20 €", image: "/assets/images/product.jpeg" },
    { id: 10, label: "Product 10", price: "5,20 €", image: "/assets/images/product.jpeg" }
];

const Section1 = () => {
    return (
        <ProductSlider title="Section #1" products={products2} />
    );
};

export default Section1;