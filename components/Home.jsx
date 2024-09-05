import React, { useState, useEffect } from 'react';
import { useView } from '../context/ViewContext';
import ProductCard from './ProductCard';
import NavBar from './NavBar';
import Footer from './Footer/Footer';
import { fetchApis } from './FetchApis/FetchApis'; 

const Home = () => {
  const { changeView } = useView();
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchApis();
        setProducts(data);
      } catch (err) {
        console.log('Error fetching the data', err);
      }
    };
    fetchProducts();
  }, []);

  const handleProductSelect = (product, isSelected) => {
    setSelectedProducts((prevSelected) => {
      if (isSelected) {
        return [...prevSelected, product];
      } else {
        return prevSelected.filter((p) => p.id !== product.id);
      }
    });
  };

  const handleBuyNowClick = () => {
    changeView('review', { selectedProducts });
  };

  return (
    <>
      <NavBar />
      <div className="home-page-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {products.map((product) => (
              <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
                <ProductCard product={product} onSelect={handleProductSelect} />
              </div>
            ))}
          </div>
        
        </div>
      </div>
    
    </>
  );
};

export default Home;