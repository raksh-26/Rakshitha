import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: '$19.99' },
    { id: 2, name: 'Product 2', price: '$29.99' },
    { id: 3, name: 'Product 3', price: '$39.99' },
    { id: 4, name: 'Product 4', price: '$49.99' },
    { id: 5, name: 'Product 5', price: '$59.99' },
    { id: 6, name: 'Product 6', price: '$69.99' },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
