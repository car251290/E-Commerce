
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <Link href="/" className={`text-white ${router.pathname === '/' ? 'underline' : 'hover:text-gray-400'}`}>
          My E-commerce App
        </Link>
      </div>
      <div className="space-x-4">
        <Link href="/" className={`text-white ${router.pathname === '/' ? 'underline' : 'hover:text-gray-400'}`}>
          Home
        </Link>
        <Link href="/product" className={`text-white ${router.pathname === '/product' ? 'underline' : 'hover:text-gray-400'}`}>
          Product
        </Link>
        <Link href="/review" className={`text-white ${router.pathname === '/review' ? 'underline' : 'hover:text-gray-400'}`}>
          Review
        </Link>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
