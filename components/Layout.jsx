// components/Layout.jsx
import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './NavBar';
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
   <main className="flex-grow">{children}</main>
    <Footer />
    </div>
  );
};

export default Layout;





