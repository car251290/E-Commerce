import React from 'react';
import { useView } from '../context/ViewContext';
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardContent, CardMedia, Button, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  const { changeView } = useView();

  const handleReviewClick = () => {
    changeView('review', product);
  };

  return (
    <Card sx={{ width: 300, height: 400, m: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            height: 200,
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)', // Slight zoom on hover
            },
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        onClick={handleReviewClick}
        variant="contained"
        color="primary"
        sx={{ m: 2 }}
      >
        Review Product
      </Button>
    </Card>
  );
};

export default ProductCard;