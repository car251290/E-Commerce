import React from 'react';
import { useView } from '../context/ViewContext';

const Product = () => {
  const { selectedProduct, changeView } = useView();

  if (!selectedProduct) {
    return <div>No product selected</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-1/2" />
        <h1 className="text-3xl font-bold my-4">{selectedProduct.name}</h1>
        <p className="text-lg mb-4">{selectedProduct.description}</p>
        <p className="text-2xl mb-4">${selectedProduct.price.toFixed(2)}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => changeView('review')}
        >
          Buy It
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => changeView('home')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Product;