
import React, {useState,useEffect} from 'react';
import { useView } from '../context/ViewContext';
import ProductCard from './ProductCard';
import NavBar from './NavBar';
import { useRouter } from 'next/router';
import { fetchApis } from './FetchApis/FetchApis';  
import Footer from './Footer/Footer'
const Home = () => {
  const { changeView } = useView();
  const [products, setProducts] = useState([]);

 useEffect(()=> {
  const fetchProducts = async () => {
    try {
      const data = await fetchApis();
    setProducts(data);

    } catch(err){
    console.log('Error fetching the data', err);
  }
};
  fetchProducts();
 },[]);
 

  const handleCardClick = (product) => {
    changeView('review', product);
  };

  return (
    <>
      <NavBar />
      <div className="home-page-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {products.map((product) => (
              <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
                <ProductCard product={product} onClick={() => handleCardClick(product)} />
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Home;