import React, { createContext, useContext, useState } from 'react';

const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('home');
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]); // Handle multiple selected products

  // Error handler
  const handlerError = (error) => {
    setError(error);
    if (products.length === 0 && error) {
      setError(null);
      console.log(`The product has a null error:`, error);
    }
  };

  // Loading handler
  const loadingHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  // View change handler
  const changeView = (view, product) => {
    setCurrentView(view);
    if (view === 'review') {
      setSelectedProducts((prevSelectedProducts) => {
        const existingProductIndex = prevSelectedProducts.findIndex(p => p.id === product.id);
        if (existingProductIndex > -1) {
          // Update quantity if product is already in the list
          const updatedProducts = [...prevSelectedProducts];
          updatedProducts[existingProductIndex].quantity += product.quantity;
          return updatedProducts;
        } else {
          // Add new product to the list
          return [...prevSelectedProducts, product];
        }
      });
    }
  };

  // Clear selected products
  const clearSelectedProducts = () => {
    setSelectedProducts([]);
  };

  return (
    <ViewContext.Provider 
      value={{
        handlerError, 
        loadingHandler, 
        currentView, 
        changeView, 
        selectedProducts, 
        products, 
        loading, 
        clearSelectedProducts
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => useContext(ViewContext);