import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Button, Typography, Collapse, IconButton, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; 
import { useRouter } from 'next/router';
import RemoveIcon from '@mui/icons-material/Remove';
import {useView} from '../context/ViewContext'; 

// The ProductCard component receives a product prop and an onSelect function prop. The product prop contains the product data, and the onSelect function prop is a function that is called when the product is selected or deselected.

const ProductCard = ({ product, onSelect }) => {
  // the image, name, description, cloudSize, and price properties are destructured from the product prop
  const { image, name, description, cloudSize, price } = product;
  const [showDescription, setShowDescription] = useState(false);
  const [showCloudSize, setShowCloudSize] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(false);
  const router = useRouter();
  const {changeView,  addToCart,} = useView();

  const toggleDescription = () => setShowDescription(!showDescription);
  const toggleCloudSize = () => setShowCloudSize(!showCloudSize);
  const handleAdd = () => setQuantity(quantity + 1);
  const handleRemove = () => quantity > 1 && setQuantity(quantity - 1);
  // The handleSelect function toggles the selected state of the product and calls the onSelect function with the product and the new selected state as arguments.
  const handleSelect = () => {
    setSelected(!selected);
    onSelect(product, !selected);
  };
// const handleReview of the product card component is called when the review button is clicked. It calls the changeView function with the view set to review and the product and quantity as arguments.
const handleReviewClick = () => {
  changeView('review',{...product,quantity});
};






  return (
    <Card className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
    {/* Image and Link */}
    <a href="#" className="flex justify-center">
      <CardMedia
        component="img"
        image={image}
        alt={name}
        className="object-cover rounded-t-lg"
        sx={{ height: 250, width: 250 }}
      />
    </a>

    {/* Card Content */}
    <div className="flex flex-col px-5 pb-5">
      {/* Product Name */}
      <CardContent className="text-center">
        <a href="#">
          <Typography variant="h6" component="div" className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </Typography>
        </a>
      </CardContent>

      {/* Ratings */}
      <div className="flex items-center mt-2.5 mb-5">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          {[...Array(5)].map((_, index) => (
            <svg key={index} className={`w-4 h-4 ${index < 4 ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
      </div>

      {/* Cloud Size */}
      <Button onClick={toggleCloudSize} variant="outlined" color="secondary" className="mb-1">
        {showCloudSize ? 'Hide Cloud Size' : 'Show Cloud Size'}
      </Button>
      {showCloudSize && (
        <Typography variant="body2" color="text.secondary" className="mb-1">
          Cloud Size: {cloudSize} MB
        </Typography>
      )}

      {/* Description */}
      <Button onClick={toggleDescription} variant="outlined" color="secondary" className="mb-1">
        {showDescription ? 'Hide Description' : 'Show Description'}
      </Button>
      <Collapse in={showDescription}>
        <Typography variant="body2" color="text.secondary" className="mb-1">
          {description}
        </Typography>
      </Collapse>

      {/* Price and Quantity */}
      <div className="flex items-center justify-between mb-2">
        <Typography variant="body2" color="text.secondary" className="text-3xl font-bold text-gray-900 dark:text-white">
          ${(price * quantity).toFixed(2)}
        </Typography>
        <div className="flex items-center">
          <IconButton onClick={handleRemove} color="primary" disabled={quantity === 1}>
            <RemoveIcon />
          </IconButton>
          <span className="mx-2">{quantity}</span>
          <IconButton onClick={handleAdd} color="primary">
            <AddIcon />
          </IconButton>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button onClick={handleReviewClick} variant="contained" color="primary" className="w-full mt-2">
        Add to cart
      </Button>
    </div>
  </Card>
   
  );
};

export default ProductCard;