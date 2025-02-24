
import React, { useCallback } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";

interface FoodCardProps {
  image: string;
  name: string;
  originalPrice: number;
  discountPercentage?: number;
  rating: number;
  hideAddToCart:boolean
}

const FoodCard = React.memo((props: FoodCardProps) => { 

  // const handleAddToCart = () => {
  //   // Retrieve existing cart or initialize an empty array
  //   const existingCart = localStorage.getItem("cart");
  //   let cart = existingCart ? JSON.parse(existingCart) : [];
  //   // Add current item to cart
  //   cart.push(props);
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   alert(`${props.name} added to cart`);
  // };

  const handleAddToCart = useCallback(() => {
    const existingCart = localStorage.getItem("cart");
    let cart = existingCart ? JSON.parse(existingCart) : [];
    cart.push(props);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${props.name} added to cart`);
  }, [props]);

  return (
    <Card sx={{ borderRadius: "16px", overflow: "hidden", m: 1 }}>
      <CardMedia
        component="img"
        height="180"
        image={props.image}
        alt={props.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {props.name}
        </Typography>
        <Typography variant="body2">
          Price: ₹{props.originalPrice}
          {props.discountPercentage && (
            <Typography variant="caption" sx={{ textDecoration: "line-through", ml: 1 }}>
              ₹{props.originalPrice}
            </Typography>
          )}
        </Typography>
        
         {!props.hideAddToCart && (
          <Box mt={2}>
            <Button
              variant="contained"
              onClick={handleAddToCart}
              sx={{ backgroundColor: "#ff4f5a", "&:hover": { backgroundColor: "#e6444f" } }}
            >
              Add to Cart
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
})

export default FoodCard;
