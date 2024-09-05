import React from 'react';
import { useView } from '../context/ViewContext';
import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();
  const { selectedProducts } = useView();

  if (!selectedProducts || selectedProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-500">No products selected.</p>
      </div>
    );
  }

  const handleButtonHome = () => {
    router.push('/');
  };

  return (
    // The Product component displays the selected products. It receives the selectedProducts array from the ViewContext and maps over the array to display each product in a product card. 
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {selectedProducts.map((product, index) => (
            <div key={index} className="product-card mx-auto max-w-md bg-white shadow-lg rounded-lg overflow-hidden mb-8">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg mb-4">{product.description}</p>
                <p className="text-2xl mb-4">Total Price: ${(product.price * product.quantity).toFixed(2)}</p>
                <p className="text-lg mb-4">Quantity: {product.quantity}</p>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded mt-4 w-full"
                  onClick={handleButtonHome}
                >
                  Back to Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Product;