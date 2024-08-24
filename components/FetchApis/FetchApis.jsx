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

