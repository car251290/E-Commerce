import React, { useState, useEffect } from 'react';
import { useView } from '../context/ViewContext';
import Product from './Product';
import Navbar from './NavBar';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { products } = useView();

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    // Handle search input change
    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.trim()) {
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);  // Show all products if the search is cleared
        }
    };

    return (
        <>
            <Navbar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <div>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                ) : (
                    <p>No Product found</p>
                )}
            </div>
        </>
    );
};

export default Search;