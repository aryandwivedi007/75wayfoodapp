// import React, { useEffect, useState } from "react";
// import { Box, Typography, LinearProgress } from "@mui/material";

// const orderStages = [
//   "Order Placed",
//   "Order Confirmed",
//   "Order Prepared",
//   "Out for Delivery",
//   "Delivered",
// ];

// const OrderTracking: React.FC = () => {
//   const [currentStageIndex, setCurrentStageIndex] = useState(0);

//   // Simulate order status updates every 5 seconds
//   useEffect(() => {
//     if (currentStageIndex < orderStages.length - 1) {
//       const timer = setTimeout(() => {
//         setCurrentStageIndex((prevIndex) => prevIndex + 1);
//       }, 5000); // 5 seconds delay for demonstration
//       return () => clearTimeout(timer);
//     }
//   }, [currentStageIndex]);

//   // Calculate progress percentage for a progress bar
//   const progress = (currentStageIndex / (orderStages.length - 1)) * 100;

//   return (
//     <Box sx={{ p: 3, maxWidth: 600, mx: "auto", textAlign: "center" }}>
//       <Typography variant="h5" gutterBottom>
//         Order Tracking
//       </Typography>
//       <Typography variant="subtitle1" sx={{ mb: 2 }}>
//         Current Status: <strong>{orderStages[currentStageIndex]}</strong>
//       </Typography>
//       <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 5 }} />
//       <Box sx={{ mt: 2 }}>
//         {orderStages.map((stage, index) => (
//           <Typography
//             key={index}
//             variant="body2"
//             sx={{
//               color: index === currentStageIndex ? "primary.main" : "text.secondary",
//               fontWeight: index === currentStageIndex ? "bold" : "normal",
//               mt: 1,
//             }}
//           >
//             {index + 1}. {stage}
//           </Typography>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default OrderTracking;
import React, { useEffect, useState } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const orderStages = [
  "Order Placed",
  "Order Confirmed",
  "Order Prepared",
  "Out for Delivery",
  "Delivered",
];

const OrderTracking: React.FC = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  // Simulate order status updates every 5 seconds
  useEffect(() => {
    if (currentStageIndex < orderStages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStageIndex((prevIndex) => prevIndex + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentStageIndex]);

  // Show a toast notification after each stage (except the initial one)
  useEffect(() => {
    if (currentStageIndex > 0) {
      toast.success(`Stage Completed: ${orderStages[currentStageIndex]}`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  }, [currentStageIndex]);

  // Calculate progress percentage for the progress bar
  const progress = (currentStageIndex / (orderStages.length - 1)) * 100;

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: "auto", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Order Tracking
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Current Status: <strong>{orderStages[currentStageIndex]}</strong>
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: 10, borderRadius: 5 }}
      />
      <Box sx={{ mt: 2 }}>
        {orderStages.map((stage, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{
              color: index === currentStageIndex ? "primary.main" : "text.secondary",
              fontWeight: index === currentStageIndex ? "bold" : "normal",
              mt: 1,
            }}
          >
            {index + 1}. {stage}
          </Typography>
        ))}
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default OrderTracking;
