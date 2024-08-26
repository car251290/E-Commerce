import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const fetchApis = async()  => {   
     try{
        const response = await fetch('https://fakestoreapi.com/products');
        if(!response.ok){
            throw new Error('Failed to fetch data');


        }
        const data = await response.json();
        return data;
    } catch(err){
        console.log('Eroro fetching the data', err);
        return[];

    }
};

// your react component

const YourComponent = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await fetchApis();
                setProducts(data);
            } catch(err){
                console.log('Error fetching the data', err);
            }
        };
        fetchProducts();
    }, []);
    return (
        <div>
          {/* Render your products here */}
          {products.map(product => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      );
}
