
import React, { createContext, useContext, useState } from 'react';

const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [view, setView] = useState('home');
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  const changeView = (newView, product) => {
    if(newView === "review") {
      if(newView === 'review') {
        setPurchasedProducts([product]);
      }
      setView(newView);
      
    }
  };

  return (
    <ViewContext.Provider value={{ view, changeView, purchasedProducts }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => useContext(ViewContext);