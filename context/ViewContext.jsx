import React, { createContext, useContext, useState, useRef} from 'react';

const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const selectedProductsRef = useRef([]);

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
  const changeView = (view, product, newProduct) => {
    setCurrentView(view);
    // add a new product to the selectedProducts array
    const existingProductIndex = selectedProductsRef.current.findIndex(p => p.name === newProduct.name);
    if(existingProductIndex !== -1){
      selectedProductsRef.current[existingProductIndex].quantity  += newProduct.quantity;

    } else {
      // add the new product to the cart
      selectedProductsRef.current.push(newProduct);
    }
    // Add product to the selected products list
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
  //const clearSelectedProducts = () => {
    //setSelectedProducts([]);
  //};

  // add a new product to the selectedProducts array
  //const addToCart = (newProduct) => {
  //  const existingProductIndex = selectedProductsRef.current.findIndex(p => p.name === newProduct.name);
  //  if(existingProductIndex !== -1){
    //  selectedProductsRef.current[existingProductIndex].quantity  += newProduct.quantity;

   // } else {
      // add the new product to the cart
     // selectedProductsRef.current.push(newProduct);
   // }

   //};



   const getSelectedProducts = () => {
    return selectedProductsRef.current;
  };

  const clearSelectedProducts = () => {
    selectedProductsRef.current = [];
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
        clearSelectedProducts,
      
        getSelectedProducts
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => useContext(ViewContext);