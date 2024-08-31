"use strict";

const axios = require('axios');

const asyncHandler = require('express-async-handler');

const Product = require('../models/productModels');


const getProducts = asyncHandler(async(req,res)=> {
try{
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
   
}catch(err){
    res.status(404);
    res.status(500);
    console.log('Faild to fetch data', err)
}
});
const getProductById = asyncHandler(async(req,res)=> {
    try{
        const response = await axios.get(`https://fakestoreapi.com/products/${req.params.id}`);
        res.json(response.data);


    } catch(err){
        res.status(500);
        throw new Error('faild to fetch data', err);

    }
})
module.exports = {getProducts,getProductById};

