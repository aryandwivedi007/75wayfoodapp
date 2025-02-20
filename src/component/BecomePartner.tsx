// import React, { useState } from "react";
// import {
//   Container,
//   Grid,
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// const BecomePartner: React.FC = () => {
//   const [formData, setFormData] = useState({
//     restaurantName: "",
//     ownerName: "",
//     email: "",
//     phone: "",
//     address: "",
//     cuisine: "",
//     website: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you can simulate submission, e.g. show a success message.
//     console.log("Application Submitted:", formData);
//   };

//   const perks = [
//     "Increase Visibility & Reach",
//     "Boost Online Orders",
//     "Marketing & Promotional Support",
//     "Exclusive Analytics & Insights",
//     "Dedicated Support Team",
//   ];

//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       <Paper elevation={3} sx={{ p: 4, borderRadius: "16px" }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* Left Column: Perks and Information */}
//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography variant="h4" gutterBottom sx={{ color: "#ff4f5a", fontWeight: "bold" }}>
//                 Partner with Foodigy
//               </Typography>
//               <Typography variant="subtitle1" gutterBottom>
//                 Join India's leading food platform to reach millions of customers and grow your business.
//               </Typography>
//               <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
//                 Why Partner with Us?
//               </Typography>
//               <List>
//                 {perks.map((perk, index) => (
//                   <ListItem key={index}>
//                     <ListItemIcon>
//                       <CheckCircleIcon sx={{ color: "#ff4f5a" }} />
//                     </ListItemIcon>
//                     <ListItemText primary={perk} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Box>
//           </Grid>

//           {/* Right Column: Form */}
//           <Grid item xs={12} md={6}>
//             <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Restaurant Name"
//                 name="restaurantName"
//                 value={formData.restaurantName}
//                 onChange={handleChange}
//                 required
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Owner Name"
//                 name="ownerName"
//                 value={formData.ownerName}
//                 onChange={handleChange}
//                 required
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Email Address"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Contact Phone"
//                 name="phone"
//                 type="tel"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Cuisine Type"
//                 name="cuisine"
//                 value={formData.cuisine}
//                 onChange={handleChange}
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Website (Optional)"
//                 name="website"
//                 value={formData.website}
//                 onChange={handleChange}
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 size="large"
//                 sx={{ mt: 3, backgroundColor: "#ff4f5a", "&:hover": { backgroundColor: "#e6444f" } }}
//               >
//                 Submit Application
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default BecomePartner;
// import React, { useState } from "react";
// import {
//   Container,
//   Grid,
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { useDispatch } from "react-redux";

// import { submitPartnerApplication } from "../store/reducers/partnerReducer";
// import { AppDispatch } from "../store/store";


// const BecomePartner: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const [formData, setFormData] = useState({
//     restaurantName: "",
//     ownerName: "",
//     email: "",
//     phone: "",
//     address: "",
//     cuisine: "",
//     website: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(submitPartnerApplication(formData));
//     console.log("Application Submitted:", formData);
//     // Optionally show a success message or navigate to another page
//   };

//   const perks = [
//     "Increase Visibility & Reach",
//     "Boost Online Orders",
//     "Marketing & Promotional Support",
//     "Exclusive Analytics & Insights",
//     "Dedicated Support Team",
//   ];

//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       <Paper elevation={3} sx={{ p: 4, borderRadius: "16px" }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* Left Column: Perks and Information */}
//           <Grid item xs={12} md={6}>
//             <Box>
//               <Typography variant="h4" gutterBottom sx={{ color: "#ff4f5a", fontWeight: "bold" }}>
//                 Partner with Foodigy
//               </Typography>
//               <Typography variant="subtitle1" gutterBottom>
//                 Join India's leading food platform to reach millions of customers and grow your business.
//               </Typography>
//               <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
//                 Why Partner with Us?
//               </Typography>
//               <List>
//                 {perks.map((perk, index) => (
//                   <ListItem key={index}>
//                     <ListItemIcon>
//                       <CheckCircleIcon sx={{ color: "#ff4f5a" }} />
//                     </ListItemIcon>
//                     <ListItemText primary={perk} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Box>
//           </Grid>

//           {/* Right Column: Form */}
//           <Grid item xs={12} md={6}>
//             <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Restaurant Name"
//                 name="restaurantName"
//                 value={formData.restaurantName}
//                 onChange={handleChange}
//                 required
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Owner Name"
//                 name="ownerName"
//                 value={formData.ownerName}
//                 onChange={handleChange}
//                 required
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Email Address"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Contact Phone"
//                 name="phone"
//                 type="tel"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Cuisine Type"
//                 name="cuisine"
//                 value={formData.cuisine}
//                 onChange={handleChange}
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 label="Website (Optional)"
//                 name="website"
//                 value={formData.website}
//                 onChange={handleChange}
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 size="large"
//                 sx={{ mt: 3, backgroundColor: "#ff4f5a", "&:hover": { backgroundColor: "#e6444f" } }}
//               >
//                 Submit Application
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default BecomePartner;
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Grid,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { submitPartnerApplication } from "../store/reducers/partnerReducer";
import { AppDispatch } from "../store/store";

const BecomePartner: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    cuisine: "",
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitPartnerApplication(formData));
    console.log("Application Submitted:", formData);
    toast.success("Data saved", {
      onClose: () => navigate("/"),
      autoClose: 2000,
    });
  };

  const perks = [
    "Increase Visibility & Reach",
    "Boost Online Orders",
    "Marketing & Promotional Support",
    "Exclusive Analytics & Insights",
    "Dedicated Support Team",
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
  <Paper elevation={3} sx={{ p: 4, borderRadius: "16px" }}>
    <Grid container spacing={4} alignItems="center">
      {/* Left Column: Perks and Information */}
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#ff4f5a", fontWeight: "bold" }}
            >
              Partner with Foodigy
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Join India's leading food platform to reach millions of customers
              and grow your business.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Why Partner with Us?
            </Typography>
            <List>
              {perks.map((perk, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#ff4f5a" }} />
                  </ListItemIcon>
                  <ListItemText primary={perk} />
                </ListItem>
              ))}
            </List>
          </Box>
        </motion.div>
      </Grid>

      {/* Right Column: Form */}
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              label="Restaurant Name"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              required
            />
            <TextField
              margin="normal"
              fullWidth
              label="Owner Name"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              required
            />
            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              margin="normal"
              fullWidth
              label="Contact Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <TextField
              margin="normal"
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <TextField
              margin="normal"
              fullWidth
              label="Cuisine Type"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Website (Optional)"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                backgroundColor: "#ff4f5a",
                "&:hover": { backgroundColor: "#e6444f" },
              }}
            >
              Submit Application
            </Button>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  </Paper>
  <ToastContainer />
</Container>
  );
};

export default BecomePartner;

