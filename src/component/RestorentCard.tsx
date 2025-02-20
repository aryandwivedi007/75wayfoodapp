import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, Rating } from "@mui/material";

interface RestaurantCardProps {
  image: string;
  name: string;
  location: string;
  cuisine: string;
  rating: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ image, name, location, cuisine, rating }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia component="img" height="180" image={image} alt={name} sx={{ objectFit: "cover" }} />
      <CardContent sx={{ textAlign: "center", p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cuisine}
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mt={1}>
          <Rating value={rating} precision={0.5} readOnly />
          <Typography variant="body2" sx={{ ml: 1, fontWeight: "bold" }}>
            {rating}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
