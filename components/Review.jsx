import React from 'react';
import { useView } from '../context/ViewContext';
import Navbar from './NavBar';

const Review = () => {
  const { selectedProduct } = useView();
  if (!selectedProduct) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p>No product selected.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Review Your Purchase</h1>
        <div className="product-card-container mx-auto max-w-md">
          <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
          <h3 className="product-name">{selectedProduct.name}</h3>
          <p className="product-description">{selectedProduct.description}</p>
          <p className="product-price">${selectedProduct.price.toFixed(2)}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;