
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
