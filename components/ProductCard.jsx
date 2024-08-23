import React from 'react';
import { useView } from '../context/ViewContext';
import { useRouter } from 'next/router';


const ProductCard = ({ product }) => {
  const { changeView } = useView();

  const handleReviewClick = () => {
    // Set the selected product and navigate to the review page
    changeView('review', product);
  };

  return (
    <div className="product-card bg-white shadow-lg rounded-lg p-4 cursor-pointer">
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-5 rounded transform scale-90 transition-transform duration-300 ease-out hover:scale-100"/>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <button
        onClick={handleReviewClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Review Product
      </button>
    </div>
  );
};
export default ProductCard;