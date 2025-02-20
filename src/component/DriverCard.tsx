import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, Button, Chip } from "@mui/material";
import { FaMotorcycle, FaStar } from "react-icons/fa";

interface DriverCardProps {
  image: string;
  name: string;
  rating: number;
  status: "Available" | "On Delivery" | "On Break";
  location: string;
  vehicle: string;
  hideAssignButton?: boolean;
  onAssign: () => void;
}

const DriverCard: React.FC<DriverCardProps> = (props) => {
  return (
    <Card sx={{ borderRadius: "16px", overflow: "hidden", m: 1, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        
        alt={props.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {props.name}
        </Typography>
        
        <Typography variant="body2" color="textSecondary">
          <FaStar className="inline text-yellow-500" /> {props.rating} ⭐
        </Typography>

        <Typography variant="body2" color="textSecondary">
          📍 {props.location}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          🚲 {props.vehicle}
        </Typography>

        {/* Status Badge */}
        <Chip
          label={props.status}
          className={`mt-2 ${
            props.status === "Available" ? "bg-green-100 text-green-700" :
            props.status === "On Delivery" ? "bg-blue-100 text-blue-700" :
            "bg-yellow-100 text-yellow-700"
          }`}
        />

        {/* Assign Order Button */}
        {!props.hideAssignButton && props.status === "Available" && (
          <Box mt={2}>
            <Button
              variant="contained"
              onClick={props.onAssign}
              sx={{ backgroundColor: "#ff4f5a", "&:hover": { backgroundColor: "#e6444f" } }}
            >
              Assign Order
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default DriverCard;
