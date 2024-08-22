import React from 'react';
import { useView } from '../context/ViewContext';
import { useRouter } from 'next/router';

const ProductCard = ({ product }) => {
  const { changeView } = useView();
  const router = useRouter();

  const handleBuyClick = () => {
   // changeView('review,', product);
    //router.push('/review');


    if (router.pathname !== '/review') {
      changeView('review', product);
      router.push('/review'); 
    }
  };

  return (
<div className="product-details">
<div className="product-card-container">
<div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-500">${product.price.toFixed(2)}</p>
      
      <button onClick={handleBuyClick} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Buy Now
      </button>
    </div>
</div>
</div>
  );
};

export default ProductCard;