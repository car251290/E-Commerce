import React, { createContext, useContext, useState } from 'react';

const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const changeView = (view, product) => {
    setCurrentView(view);
    setSelectedProduct(product);
  };

  return (
    <ViewContext.Provider value={{ currentView, changeView, selectedProduct }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => useContext(ViewContext);