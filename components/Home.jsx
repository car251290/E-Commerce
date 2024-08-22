
import React from 'react';
import { useView } from '../context/ViewContext';
import ProductCard from './ProductCard';
import NavBar from './NavBar';


const Home = () => {
  const { changeView } = useView();

  const products = [
    { id: 1, name: 'DeadPool Funko', price: 29.99, image: '', description: 'This is Product 1' },
    { id: 2, name: 'Nike Shoes', price: 39.99, image: '/images/product2.jpg', description: 'This is Product 2' },
    { id: 3, name: 'Patagonia Jacket', price: 19.99, image: '/images/product3.jpg', description: 'This is Product 3' },
    // second row
    { id: 4, name: ' Funko', price: 29.99, image: '', description: 'This is Product 4' },
    { id: 5, name: 'Nike Shoes', price: 39.99, image: '/images/product2.jpg', description: 'This is Product 5' },
    { id: 6, name: 'Patagonia product', price: 19.99, image: '/images/product3.jpg', description: 'This is Product 6' },
    // third row
    { id: 7, name: 'Funko', price: 50, image: '', description: 'This is Product 7' },
    { id: 8, name: 'Shoes', price: 40, image: '/images/product2.jpg', description: 'This is Product 8' },
    { id: 9, name: 'Patagonia product', price: 60, image: '/images/product3.jpg', description: 'This is Product 9' },
  ];

  return (
    <>
    <NavBar />
    <div className="home-page-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {products.map(product => (
            <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
              <div className="product-card-container">
                <ProductCard product={product} onClick={() => changeView('product', product)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default Home;