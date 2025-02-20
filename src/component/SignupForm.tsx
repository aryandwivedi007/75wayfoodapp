import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to create the account.
    console.log("Signup form data:", formData);
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
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
              Sign Up to Foodigy
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Join India's leading food ordering platform for exclusive offers and delicious deals.
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <TextField
                  fullWidth
                  required
                  label="Full Name"
                  name="fullName"
                  variant="outlined"
                  margin="normal"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <TextField
                  fullWidth
                  required
                  label="Email Address"
                  name="email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: "#ff4f5a",
                    "&:hover": { backgroundColor: "#e6444f" },
                  }}
                >
                  Sign Up
                </Button>
              </motion.div>
            </Box>
            <Typography variant="body2" align="center" sx={{ mt: 2, color: "#666" }}>
              Already have an account?{" "}
              <Link
                component={RouterLink}
                to="/login"
                sx={{ color: "#ff4f5a", fontWeight: "bold" }}
              >
                Login here
              </Link>
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SignupForm;
