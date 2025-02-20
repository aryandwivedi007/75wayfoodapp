
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const popularCuisines = [
  { name: "Italian" },
  { name: "Chinese" },
  { name: "Indian" },
  { name: "Mexican" },
];

const popularRestaurants = [
  { name: "The Gourmet Kitchen" },
  { name: "Spice Symphony" },
  { name: "Sushi Sensation" },
];

const deliveryCities = [
  { name: "New Delhi" },
  { name: "Mumbai" },
  { name: "Bangalore" },
  { name: "Hyderabad" },
  { name: "Chennai" },
];

const ExploreOptions: React.FC = () => {
  // Define a common hover style for Cards:
  const cardHoverStyle = {
    borderRadius: 2,
    p: 2,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "rgba(255, 79, 90, 0.1)",
      "& .MuiTypography-root": { color: "#ff4f5a" },
    },
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#ff4f5a", mb: 3 }}
      >
        Explore Options
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ff4f5a" }} />}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Popular Cuisines Near Me
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {popularCuisines.map((cuisine, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Card sx={cardHoverStyle}>
                  <CardContent>
                    <Typography variant="body2" align="center">
                      {cuisine.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ff4f5a" }} />}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Popular Restaurants Near Me
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {popularRestaurants.map((restaurant, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Card sx={cardHoverStyle}>
                  <CardContent>
                    <Typography variant="body2" align="center">
                      {restaurant.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#ff4f5a" }} />}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Cities We Deliver To
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {deliveryCities.map((city, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Card sx={cardHoverStyle}>
                  <CardContent>
                    <Typography variant="body2" align="center">
                      {city.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ExploreOptions;
