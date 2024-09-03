import React from 'react';
import Product from '../components/Product';    
import Navbar from '../components/NavBar';
import {useView} from '../context/ViewContext'; 
import { useRouter } from 'next/router';
import Home from '../components/Home';

const ProductPage = () => {

return (
    <>
    <Navbar />
     <Product/>
    </>
   
)
}
export default ProductPage;