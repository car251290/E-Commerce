import React from 'react';
import Navbar from '../components/Navbar'; 
import { useView } from '../context/ViewContext'; 

const Review = () => {
  const { purchasedProducts } = useView();

  const products = purchasedProducts || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Review Your Purchases</h1>
        {products.length > 0 ? (
          <div className="flex flex-col space-y-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded shadow">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-green-500">${product.price.toFixed(2)}</p>
                <p className="mt-4 text-lg font-semibold">Thank you for your purchase!</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">You have not purchased any products yet.</p>
        )}
      </main>
    </div>
  );
};

export default Review;