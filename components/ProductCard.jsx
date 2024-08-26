import React,{use, useState} from 'react';
import { useView } from '../context/ViewContext';
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardContent, CardMedia, Button, Typography, Collapse, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const ProductCard = ({ product }) => {
  const { changeView } = useView();
  const [showDescription, setShowDescription] = useState(false);
  const [showCloudSize, setShowCloudSize] = useState(false);
  const [quantity, setQuantity] = useState(1);

// handle the review for the product
  const handleReviewClick = () => {
    changeView('review', {...product, quantity});
  };
  // check the toggle description of the description of the product
  const toggleDescription = () => {

    setShowDescription(!showDescription);

  }
  // check the toggle cloud size of the product

  const toggleCloudSize = () => {
    setShowCloudSize(!showCloudSize);
  }
  // handle the add button for the quantity of the product
  const handleAdd = () => {
    setQuantity(quantity + 1);
  }
// handle the remove button for the quantity of the product 
  const handleRemove = () => {
    if(quantity > 1){
      setQuantity(prevQuantity => prevQuantity - 1); 
    }

  }



  return (
    <Card sx={{ width: 300, m: 2, display: 'flex', flexDirection: 'column' }}>
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            height: 200,
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>

          <Button onClick={toggleCloudSize} variant="outlined" color="secondary" sx={{ mb: 1 }}>
            {showCloudSize ? 'Hide Cloud Size' : 'Show Cloud Size'}
          </Button>
          {showCloudSize && (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Cloud Size: {product.cloudSize} MB
            </Typography>
          )}

          <Button onClick={toggleDescription} variant="outlined" color="secondary" sx={{ mb: 1 }}>
            {showDescription ? 'Hide Description' : 'Show Description'}
          </Button>
          <Collapse in={showDescription}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {product.description}
            </Typography>
          </Collapse>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Price: ${(product.price * quantity).toFixed(2)}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
            Quantity:
            <IconButton onClick={handleRemove} color="primary" disabled={quantity === 1}>
              <RemoveIcon />
            </IconButton>
            {quantity}
            <IconButton onClick={handleAdd} color="primary">
              <AddIcon />
            </IconButton>
          </Typography>
        </CardContent>
      </CardActionArea>

      <Button
        onClick={handleReviewClick}
        variant="contained"
        color="primary"
        sx={{ m: 2, mb: 1 }}
      >
        Buy
      </Button>
    </Card>
  );
};

export default ProductCard;