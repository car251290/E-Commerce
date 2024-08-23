import React from 'react';
import { useView } from '../context/ViewContext';
import Home from '../components/Home';
import Product from '../components/Product';
import Review from '../components/Review';

export default function Index() {
  const { currentView } = useView();

  if (currentView === 'review') return <Review />;
  return <Home />;
}