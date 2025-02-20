

// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Paper,
//   Typography,
//   Button,
//   Grid,
//   Box,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import FoodCard from "../component/FoodCard";
// import DummyPaymentForm from "../component/DummyPaymentComponent";
// import OrderTracking from "../component/OrderTracking";
// import OrderNotificationComponent from "../component/OrderNotificationComponent";


// // This component combines a dynamic cart and a simulated order process.
// const OrderPage: React.FC = () => {
//   // Local cart from localStorage (dummy cart facility)
//   const [cart, setCart] = useState<any[]>([]);
//   // Order process states
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [paymentCompleted, setPaymentCompleted] = useState(false);
//   const [orderStage, setOrderStage] = useState<"confirmed" | "prepared" | "delivered" | null>(null);
//   const navigate = useNavigate();

//   // Load cart from localStorage on mount
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   const handlePlaceOrder = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty.");
//       return;
//     }
//     // Simulate order placement
//     setOrderPlaced(true);
//     setOrderStage("confirmed");
//     // Optionally, clear the cart after placing order
//     localStorage.removeItem("cart");
//   };

//   const handlePaymentSuccess = () => {
//     setPaymentCompleted(true);
//     // Simulate order status updates after payment
//     setTimeout(() => {
//       setOrderStage("prepared");
//     }, 5000);
//     setTimeout(() => {
//       setOrderStage("delivered");
//     }, 10000);
//   };

//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <Paper
//         elevation={3}
//         sx={{
//           p: 4,
//           borderRadius: "16px",
//           textAlign: "center",
//           background: "#fff",
//         }}
//       >
//         {!orderPlaced ? (
//           <>
//             <Typography
//               variant="h4"
//               gutterBottom
//               sx={{ color: "#ff4f5a", fontWeight: "bold" }}
//             >
//               Your Cart
//             </Typography>
//             {cart.length === 0 ? (
//               <Typography variant="h6" color="text.secondary">
//                 Your cart is empty.
//               </Typography>
//             ) : (
//               <Grid container spacing={3}>
//                 {cart.map((item, index) => (
//                   <Grid item xs={12} sm={6} md={4} key={index}>
//                     <FoodCard {...item} hideAddToCart={true} />
//                   </Grid>
//                 ))}
//               </Grid>
//             )}
//             {cart.length > 0 && (
//               <Box sx={{ mt: 3 }}>
//                 <Button
//                   variant="contained"
//                   fullWidth
//                   onClick={handlePlaceOrder}
//                   sx={{
//                     backgroundColor: "#ff4f5a",
//                     "&:hover": { backgroundColor: "#e6444f" },
//                   }}
//                 >
//                   Place Order
//                 </Button>
//               </Box>
//             )}
//           </>
//         ) : (
//           <>
//             {!paymentCompleted ? (
//               <>
//                 <Typography
//                   variant="h4"
//                   gutterBottom
//                   sx={{ color: "#ff4f5a", fontWeight: "bold" }}
//                 >
//                   Payment
//                 </Typography>
//                 <DummyPaymentForm onPaymentSuccess={handlePaymentSuccess} />
//               </>
//             ) : (
//               <>
//                 <Typography
//                   variant="h4"
//                   gutterBottom
//                   sx={{ color: "#ff4f5a", fontWeight: "bold" }}
//                 >
//                   Order Tracking
//                 </Typography>
//                 <OrderTracking />
//                 {orderStage && (
//                   <OrderNotificationComponent orderStage={orderStage} />
//                 )}
//               </>
//             )}
//           </>
//         )}
//         {/* A test notification button for debugging */}
//         <Box sx={{ mt: 2 }}>
         
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default OrderPage;



import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FoodCard from "../component/FoodCard";
import DummyPaymentForm from "../component/DummyPaymentComponent";
import OrderTracking from "../component/OrderTracking";
import OrderNotificationComponent from "../component/OrderNotificationComponent";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const OrderPage: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [orderStage, setOrderStage] = useState<"confirmed" | "prepared" | "delivered" | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    setOrderPlaced(true);
    setOrderStage("confirmed");
    localStorage.removeItem("cart");
  };

  const handlePaymentSuccess = () => {
    setPaymentCompleted(true);
    setTimeout(() => setOrderStage("prepared"), 5000);
    setTimeout(() => setOrderStage("delivered"), 10000);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: "16px",
            textAlign: "center",
            background: "#fff",
          }}
        >
          {!orderPlaced ? (
            <>
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: "#ff4f5a", fontWeight: "bold" }}
                >
                  Your Cart
                </Typography>
              </motion.div>
              {cart.length === 0 ? (
                <Typography variant="h6" color="text.secondary">
                  Your cart is empty.
                </Typography>
              ) : (
                <Grid container spacing={3}>
                  {cart.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <FoodCard {...item} hideAddToCart={true} />
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              )}
              {cart.length > 0 && (
                <Box sx={{ mt: 3 }}>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={handlePlaceOrder}
                      sx={{
                        backgroundColor: "#ff4f5a",
                        "&:hover": { backgroundColor: "#e6444f" },
                      }}
                    >
                      Place Order
                    </Button>
                  </motion.div>
                </Box>
              )}
            </>
          ) : (
            <>
              {!paymentCompleted ? (
                <>
                  <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ color: "#ff4f5a", fontWeight: "bold" }}
                    >
                      Payment
                    </Typography>
                  </motion.div>
                  <DummyPaymentForm onPaymentSuccess={handlePaymentSuccess} />
                </>
              ) : (
                <>
                  <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ color: "#ff4f5a", fontWeight: "bold" }}
                    >
                      Order Tracking
                    </Typography>
                  </motion.div>
                  <OrderTracking />
                  {orderStage && (
                    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                      <OrderNotificationComponent orderStage={orderStage} />
                    </motion.div>
                  )}
                </>
              )}
            </>
          )}
        </Paper>
      </motion.div>
    </Container>
  );
};

export default OrderPage;
