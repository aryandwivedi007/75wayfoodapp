
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { foodData } from "../data/FoodData";
import FoodCard from "./FoodCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FoodPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // Filter food items based on search query
  const filteredFood = foodData.filter((food) =>
    food.name.toLowerCase().includes(searchQuery)
  );

  return (
    <Container sx={{ py: 4 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 3 }}
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Search Results for "{searchQuery}"
        </Typography>

        {filteredFood.length === 0 ? (
          <Typography
            variant="h6"
            color="text.secondary"
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No results found.
          </Typography>
        ) : (
          <Grid container spacing={3} component={motion.div} variants={containerVariants}>
            {filteredFood.map((food, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} component={motion.div} variants={itemVariants}>
                <FoodCard {...food} />
              </Grid>
            ))}
          </Grid>
        )}
      </motion.div>
    </Container>
  );
};

export default FoodPage;
