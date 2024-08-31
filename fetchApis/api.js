'use strict';

import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';


// fetch all products
export const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };

  // fetch the product by id
export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        return response.data;

    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};



  