
import React from "react";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BannerImage from "../assets/banner.jpg";
import FeatureCard from "./FeatureCard";
import { featureData } from "../data/Feature";
import ExploreOptions from "./ExploreOptions";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url(${BannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: "50vh", md: "70vh" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
          <Box sx={{ position: "relative", zIndex: 1, px: 2 }}>
            <motion.div variants={fadeUpVariant}>
              <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                Craving Delicious Food?
              </Typography>
            </motion.div>
            <motion.div variants={fadeUpVariant} transition={{ delay: 0.2 }}>
              <Typography variant="h6" sx={{ mb: 4 }}>
                Discover the best restaurants near you!
              </Typography>
            </motion.div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#d32f2f", color: "#fff" }}
                    size="large"
                    onClick={() => navigate("/restaurants")}
                  >
                    Browse Restaurants
                  </Button>
                </motion.div>
              </Grid>
              <Grid item>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#d32f2f",
                      color: "#d32f2f",
                      "&:hover": { backgroundColor: "#d32f2f", color: "#fff" },
                    }}
                    size="large"
                    onClick={() => navigate("/become-partner")}
                  >
                    Become a Partner
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </motion.div>

     {/* Feature Section */}
<Container sx={{ py: 8 }}>
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // Trigger earlier
    variants={{
      hidden: { opacity: 0, y: 80 }, // Moves up from a lower position
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" }, // Smooth effect
      },
    }}
  >
    <Typography variant="h4" align="center" gutterBottom>
      Why Choose Foodigy?
    </Typography>
  </motion.div>

  <Grid container spacing={4} sx={{ mt: 4 }}>
    {featureData.map((feature, index) => (
      <Grid item xs={12} md={4} key={index}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Starts animation earlier
          variants={{
            hidden: { opacity: 0, y: 100 }, // Moves up from the bottom
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.2, // Slightly longer duration
                ease: "easeOut",
                delay: index * 0.15, // Staggered effect for each card
              },
            },
          }}
        >
          <FeatureCard
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        </motion.div>
      </Grid>
    ))}
  </Grid>

  <ExploreOptions />
</Container>


      {/* Footer */}
      {/* <Box sx={{ backgroundColor: "#fff8f8", py: 4 }}>
        <Container>
          <Typography variant="body2" align="center" sx={{ color: "#d32f2f" }}>
            © {new Date().getFullYear()} Foodigy. All rights reserved.
          </Typography>
        </Container>
      </Box> */}
    </>
  );
};

export default LandingPage;
