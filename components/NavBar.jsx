
import React,{useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useView } from '../context/ViewContext';

const Navbar = () => {
  const router = useRouter();
  const {changeView} = useView();
  const [searchTerm, setSearchTerm] = useState('');


  // handle to search the card products
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);

  }

  // handle the search button submit
  const handlerSearchSubmit = (event) => {  
    event.preventDefault();
    if(searchTerm.trim()){
      router.push(`/product?search=${encodeURIComponent(searchTerm.trim())}`);

    }
  };

  return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <Link href="/" className={`text-white ${router.pathname === '/' ? 'underline' : 'hover:text-gray-400'}`}>
          E-commerce App
        </Link>
      </div>
      <div className="flex items-center space-x-4">
      <Link href="/" className={`text-white ${router.pathname === '/' ? 'underline' : 'hover:text-gray-400'}`}>
          Home
        </Link>
        <Link href="/product" className={`text-white ${router.pathname === '/product' ? 'underline' : 'hover:text-gray-400'}`}>
          Product
        </Link>
        <Link href="/review" className={`text-white ${router.pathname === '/review' ? 'underline' : 'hover:text-gray-400'}`}>
          Review
        </Link>
        <form onSubmit={handlerSearchSubmit} className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="px-3 py-1 rounded-l-md border border-gray-600 bg-gray-700 text-white"
          />
          <button type="submit" className="px-4 py-1 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
            Search
          </button>
        </form>
      
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
