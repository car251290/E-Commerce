
import React,{useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useView } from '../context/ViewContext';
import Review from './Review';


const Navbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search button submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/product?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/" aria-label="Home" className={`text-white ${router.pathname === '/' ? 'underline' : 'hover:text-gray-400'}`}>
            E-commerce App
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/" aria-label="Home" className={`text-white ${router.pathname === '/' ? 'underline' : 'hover:text-gray-400'}`}>
            Home
          </Link>
          <Link href="/product-page" aria-label="Products" className={`text-white ${router.pathname === '/product-page' ? 'underline' : 'hover:text-gray-400'}`}>
            Product
          </Link>
          <Link href="/review-page" aria-label="Reviews" className={`text-white ${router.pathname === '/review-page' ? 'underline' : 'hover:text-gray-400'}`}>
            Review
          </Link>
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search products..."
              className="px-3 py-1 rounded-l-md border border-gray-600 bg-gray-700 text-white"
              aria-label="Search products"
            />
            <button
              type="submit"
              className="px-4 py-1 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
              aria-label="Search"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;