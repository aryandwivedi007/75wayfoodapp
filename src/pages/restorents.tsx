
import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useGetRecommendationsQuery } from "../services/api"; // ✅ Import API hook
import pizza from "../assets/pizza.jpg";
import sushi from "../assets/sushi.jpg";

const Restorents: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search") || "";

  // ✅ Fetch restaurant recommendations based on search query
  const { data, isLoading } = useGetRecommendationsQuery(query, {
    skip: !query, // Skip API call if query is empty
  });

  console.log(data)

  if (isLoading) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">Loading...</Typography>
      </Box>
    );
  }

  if (!data?.data?.recommendations || data.data.recommendations.length === 0) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">No matching restaurants found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ff4f5a", mb: 3 }}>
        Restaurants with same cusines and with similar taste as {data.data.restaurant} 
      </Typography>
      <Grid container spacing={3}>
        {data.data.recommendations.map((restaurant, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={{ borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={index % 2 === 0 ? pizza : sushi} // ✅ Alternating images
                  alt={restaurant.restaurant}
                />
                <CardContent>
                  <Typography variant="h6" align="center" sx={{ fontWeight: "bold", mb: 1 }}>
                    {restaurant.restaurant}
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ mb: 1 }}>
                    Cuisine: {restaurant.cuisines}
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ mb: 1 }}>
                    Rating: {restaurant["Mean Rating"]}
                  </Typography>
                  <Typography variant="body2" align="center">
                    Location: {restaurant.location}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Restorents;
