
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // starts 50px below its final position
      whileInView={{ opacity: 1, y: 0 }} // animates to its final position
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <Card sx={{ borderRadius: "16px", overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ textAlign: "center", p: 3 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 1, color: "#d32f2f" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;

