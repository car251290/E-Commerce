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
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{selectedProduct.name}</h3>
          <p className="text-gray-700 mb-2">{selectedProduct.description}</p>
          <p className="text-lg font-bold mb-4">${selectedProduct.price.toFixed(2)}</p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => alert('Feature coming soon!')}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;