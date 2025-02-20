import React from 'react';
import { motion } from 'framer-motion';
import LandingPage from '../component/LandingPage';
import { Container, Typography, Grid } from '@mui/material';
import { foodData } from '../data/FoodData';
import FoodCard from '../component/FoodCard';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 10, delay: index * 0.1 }
  }),
};

const Home = () => {
    const cardVariants = {
            hidden: { opacity: 0, y: 80 }, // Starts lower for more impact
            visible: (index) => ({
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.2, // Extended duration for a smoother feel
                ease: "easeOut",
                delay: index * 0.1, // Stagger effect to make cards appear sequentially
              },
            }),
          };
  return (
    
      
      <>
        <LandingPage />
        <Container sx={{ py: 4 }}>
          {foodData.length === 0 ? (
            <Typography variant="h6" color="text.secondary">
              No results found.
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {foodData.map((food, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} // Trigger earlier while scrolling
                    variants={cardVariants}
                  >
                    <FoodCard {...food} hideAddToCart={false} />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </>
  );
};

export default Home;


