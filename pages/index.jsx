import React from 'react';
import { useView } from '../context/ViewContext';
import Home from '../components/Home';
import Product from '../components/Product';
import Review from '../components/Review';
import ErrorBoundary from '../components/ErrorBoundary';
export default function Index({products}) {
  const { currentView } = useView();


  if (currentView === 'review') return <ErrorBoundary><Review /></ErrorBoundary>;

  return <ErrorBoundary><Home products={products} /></ErrorBoundary>
 
}
export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}



