
import { motion } from "framer-motion";

import React, { useState } from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/authReducer";


const LoginForm: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [openOTP, setOpenOTP] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim().length === 10) {
      setOpenOTP(true);
    } else {
      alert("Please enter a valid 10-digit phone number");
    }
  };

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleOTPSubmit = () => {
    if (otp.trim().length === 4) {
      dispatch(login());
      setOpenOTP(false);
      navigate("/");
    } else {
      alert("Please enter a 4-digit OTP");
    }
  };

  const handleGoogleLogin = () => {
    dispatch(login());
    navigate("/");
  };

  const handleFacebookLogin = () => {
    dispatch(login());
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1528715471579-d2e3a9e7b24b?fit=crop&w=1350&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 2,
              backgroundColor: "rgba(255,255,255,0.95)",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ color: "#ff4f5a", fontWeight: "bold" }}
            >
              Login to Foodigy
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Join India's leading food ordering platform for exclusive offers and delicious deals.
            </Typography>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  required
                  label="Phone Number"
                  variant="outlined"
                  value={phone}
                  onChange={handlePhoneChange}
                  sx={{ mb: 2 }}
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#ff4f5a",
                      "&:hover": { backgroundColor: "#e6444f" },
                    }}
                  >
                    Login with Phone
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
            <Divider sx={{ my: 3 }}>OR</Divider>
            <Stack spacing={2}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<GoogleIcon />}
                  onClick={handleGoogleLogin}
                  sx={{
                    borderColor: "#ff4f5a",
                    color: "#ff4f5a",
                    "&:hover": { borderColor: "#e6444f", color: "#e6444f" },
                  }}
                >
                  Continue with Google
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  onClick={handleFacebookLogin}
                  sx={{
                    borderColor: "#ff4f5a",
                    color: "#ff4f5a",
                    "&:hover": { borderColor: "#e6444f", color: "#e6444f" },
                  }}
                >
                  Continue with Facebook
                </Button>
              </motion.div>
            </Stack>
          </Paper>
        </motion.div>
      </Container>

      {/* OTP Dialog */}
      <Dialog open={openOTP} onClose={() => setOpenOTP(false)}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DialogTitle>Enter OTP</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Please enter the 4-digit OTP sent to {phone}
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              label="OTP"
              type="text"
              fullWidth
              value={otp}
              onChange={handleOTPChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenOTP(false)} color="secondary">
              Cancel
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleOTPSubmit}
                variant="contained"
                sx={{ backgroundColor: "#ff4f5a", "&:hover": { backgroundColor: "#e6444f" } }}
              >
                Submit OTP
              </Button>
            </motion.div>
          </DialogActions>
        </motion.div>
      </Dialog>
    </Box>
  );
};

export default LoginForm;
