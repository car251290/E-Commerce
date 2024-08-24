import React, { createContext, useEffect, useContext, useState } from 'react';
import { fetchApis } from '../components/FetchApis/FetchApis';
import axios from 'axios';
const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('home');
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedProduct, setSelectedProduct] = useState(null);
  // fethcing the data from the api

  useEffect(() => {
    const fetchApis = async () => {
      setLoading(true);
      const products = await fetchApis();
      setProducts(products);
      setLoading(false);
    };

    fetchApis();

  }, []);

  const changeView = (view, product) => {
    setCurrentView(view);
    setSelectedProduct(product);
  };

  return (
    <ViewContext.Provider value={{ currentView, changeView, selectedProduct,products,loading

     }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => useContext(ViewContext);