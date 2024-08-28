import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Ecommerce App
        </p>
        <div className="space-x-4 mb-4">
          <a href="/about" className="px-2 hover:text-gray-400">Privacy Policy</a>
          <a href="/contact" className="px-2 hover:text-gray-400">Terms of Service</a>
          <a href="/privacy" className="px-2 hover:text-gray-400">Contact Us</a>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;