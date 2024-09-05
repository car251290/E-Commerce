import React from 'react';
import { useView } from '../context/ViewContext';
import Navbar from './NavBar';
import Footer from './Footer/Footer';

const Review = () => {
  const { selectedProducts, clearSelectedProducts } = useView();
  

  if (!selectedProducts || selectedProducts.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-500">No products selected.</p>
        </div>
       
      </>
    );
  }
  const handlerPurchase = () => {
    alert("coming soon");
    clearSelectedProducts([]);
  }

  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Review Your Purchase</h1>
      {selectedProducts.map((product, index) => {
        // Convert price and quantity to numbers if necessary
        const price = Number(product.price);
        const quantity = Number(product.quantity);
        const totalPrice = (price * quantity).toFixed(2);

        return (
          <div key={index} className="product-card-container mx-auto max-w-md bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg transform transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex flex-col items-center justify-center mb-6">
                <p className="text-lg font-medium text-gray-700">Quantity: {quantity}</p>
                <p className="text-lg font-medium text-gray-700">Total Price: ${totalPrice}</p>
              </div>
            </div>
            <div className="p-6">
              <button
                className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                onClick={handlerPurchase}
              >
                Complete Purchase
              </button>
            </div>
          </div>
        );
      })}
    </div>
   
  </>
  );
};

export default Review;