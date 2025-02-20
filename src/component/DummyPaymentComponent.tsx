// import React, { useState } from "react";
// import {
//   Container,
//   Paper,
//   Box,
//   TextField,
//   Typography,
//   Button,
//   Grid,
// } from "@mui/material";

// const DummyPaymentForm: React.FC = () => {
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardHolder: "",
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//   });
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPaymentInfo({
//       ...paymentInfo,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulate secure payment processing (e.g., show a spinner, then success)
//     // In a real app, you would integrate with a payment gateway here.
//     setTimeout(() => {
//       setPaymentSuccess(true);
//     }, 1500);
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 8 }}>
//       <Paper
//         elevation={3}
//         sx={{ p: 4, borderRadius: "16px", backgroundColor: "#fff" }}
//       >
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{ textAlign: "center", color: "#ff4f5a", fontWeight: "bold" }}
//         >
//           Secure Payment
//         </Typography>
//         {!paymentSuccess ? (
//           <Box component="form" onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               required
//               label="Card Holder Name"
//               name="cardHolder"
//               variant="outlined"
//               margin="normal"
//               value={paymentInfo.cardHolder}
//               onChange={handleChange}
//             />
//             <TextField
//               fullWidth
//               required
//               label="Card Number"
//               name="cardNumber"
//               variant="outlined"
//               margin="normal"
//               value={paymentInfo.cardNumber}
//               onChange={handleChange}
//             />
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   required
//                   label="Expiry Date (MM/YY)"
//                   name="expiry"
//                   variant="outlined"
//                   margin="normal"
//                   value={paymentInfo.expiry}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   required
//                   label="CVV"
//                   name="cvv"
//                   type="password"
//                   variant="outlined"
//                   margin="normal"
//                   value={paymentInfo.cvv}
//                   onChange={handleChange}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{
//                 mt: 3,
//                 backgroundColor: "#ff4f5a",
//                 "&:hover": { backgroundColor: "#e6444f" },
//               }}
//             >
//               Pay Now
//             </Button>
//           </Box>
//         ) : (
//           <Typography
//             variant="h5"
//             sx={{ textAlign: "center", mt: 4, color: "green" }}
//           >
//             Payment Successful!
//           </Typography>
//         )}
//       </Paper>
//     </Container>
//   );
// };

// export default DummyPaymentForm;
import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";

interface DummyPaymentFormProps {
  onPaymentSuccess: () => void;
}

const DummyPaymentForm: React.FC<DummyPaymentFormProps> = ({ onPaymentSuccess }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardHolder: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [processing, setProcessing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    // Simulate payment processing delay
    setTimeout(() => {
      setProcessing(false);
      onPaymentSuccess();
    }, 1500);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="body1" gutterBottom>
        Enter Payment Details
      </Typography>
      <TextField
        fullWidth
        required
        label="Card Holder Name"
        name="cardHolder"
        value={paymentInfo.cardHolder}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        required
        label="Card Number"
        name="cardNumber"
        value={paymentInfo.cardNumber}
        onChange={handleChange}
        margin="normal"
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            label="Expiry Date (MM/YY)"
            name="expiry"
            value={paymentInfo.expiry}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            label="CVV"
            name="cvv"
            type="password"
            value={paymentInfo.cvv}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "#ff4f5a",
          "&:hover": { backgroundColor: "#e6444f" },
        }}
        disabled={processing}
      >
        {processing ? "Processing..." : "Pay Now"}
      </Button>
    </Box>
  );
};

export default DummyPaymentForm;
