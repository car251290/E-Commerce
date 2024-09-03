import React from 'react';
import { useView  } from '../context/ViewContext';
import Navbar from './NavBar';
import Footer from './Footer/Footer';

const Review = () => {
  const { selectedProduct } = useView ();

  if (!selectedProduct) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-500">No product selected.</p>
        </div>
      </>
    );
  }
  // destructuring selectedProduct
  const {image, name , description, price, quantity} = selectedProduct;

  const totalPrice = (selectedProduct.price * selectedProduct.quantity).toFixed(2);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Review Your Purchase</h1>
        <div className="product-card-container mx-auto max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image with 3D Animation */}
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover rounded-t-lg transform transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{name}</h3>
            <p className="text-gray-600 mb-4">{description}</p>

            {/* Quantity and Total Price Centered */}
            <div className="flex flex-col items-center justify-center mb-6">
              <p className="text-lg font-medium text-gray-700">Quantity: {quantity}</p>
              <p className="text-lg font-medium text-gray-700">Total Price: ${totalPrice}</p>
            </div>

            {/* Buy Now Button */}
            <button
              className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              onClick={() => alert('Feature coming soon!')}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Review;