import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { motion } from "framer-motion";
import { useRegisterMutation } from "../services/api";
import PasswordInput from "./PasswordInput";

const validation = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Minimum 5 chars are required")
    .max(16, "Maximum 16 chars allowed"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

type FormData = typeof validation.__outputType;

export default function SignupForm() {
  const [registerUser] = useRegisterMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(validation),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await registerUser(data).unwrap();
      toast.success("User registered successfully!");
      navigate("/", { replace: true });
    } catch (error: any) {
      const validationError = error?.data?.data?.errors?.[0].msg;
      toast.error(
        validationError ?? error?.data?.message ?? "Something went wrong!"
      );
    }
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
            Sign Up for Foodigy
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Create your account.
          </Typography>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
              <TextField
                fullWidth
                required
                label="Name"
                variant="outlined"
                {...register("name")}
                error={Boolean(errors.name?.message)}
                helperText={errors.name?.message}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                required
                label="Email"
                variant="outlined"
                {...register("email")}
                error={Boolean(errors.email?.message)}
                helperText={errors.email?.message}
                sx={{ mb: 2 }}
              />
              <PasswordInput
                fullWidth
                required
                label="Password"
                variant="outlined"
                {...register("password")}
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
                sx={{ mb: 2 }}
              />
              <PasswordInput
                fullWidth
                required
                label="Confirm Password"
                variant="outlined"
                {...register("confirmPassword")}
                error={Boolean(errors.confirmPassword?.message)}
                helperText={errors.confirmPassword?.message}
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
                  disabled={!isValid}
                  sx={{
                    backgroundColor: "#ff4f5a",
                    "&:hover": { backgroundColor: "#e6444f" },
                  }}
                >
                  Sign Up
                </Button>
              </motion.div>
            </Box>
          </motion.div>
          <Divider sx={{ my: 3 }} />
          <Typography align="center">
            Already have an account? <NavLink to="/login" style={{ color: "#ff4f5a" }}>Sign in</NavLink>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
}