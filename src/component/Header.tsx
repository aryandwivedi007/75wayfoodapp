
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   InputBase,
//   IconButton,
//   Menu,
//   MenuItem,
//   Button,
//   Typography,
// } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { MdOutlineWork } from "react-icons/md";
// import { FaUserCircle, FaSearch, FaLocationArrow } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../store/store";
// import { logout } from "../store/reducers/authReducer";

// const Header: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
//   // Get partner applications from Redux (partner slice)
//   const partnerApplications = useSelector((state: RootState) => state.partner.applications);
//   const dispatch = useDispatch();

//   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       // Check if any partner application restaurant name matches the query (case-insensitive)
//       const matchedPartner = partnerApplications.find((app: any) =>
//         app.restaurantName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       if (matchedPartner) {
//         navigate(`/restorents?search=${encodeURIComponent(searchQuery)}`);
//       } else {
//         navigate(`/food?search=${encodeURIComponent(searchQuery)}`);
//       }
//     }
//   };

//   const handleProtectedNavigation = (path: string) => {
//     if (isAuthenticated) {
//       navigate(path);
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position="static"
//         sx={{
//           backgroundColor: "#fff",
//           boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//           padding: "8px 0",
//         }}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           {/* Logo + Location */}
//           <Box
//             component={Link}
//             to="/"
//             display="flex"
//             alignItems="center"
//             sx={{ textDecoration: "none", color: "#333" }}
//           >
//             <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ff4f5a" }}>
//               Foodigy
//             </Typography>
//             <IconButton sx={{ color: "#666", marginLeft: 1 }}>
//               <FaLocationArrow size={16} />
//             </IconButton>
//             <Typography variant="body2" sx={{ color: "#666", marginLeft: "4px" }}>
//               Mohali, India
//             </Typography>
//           </Box>

//           {/* Search Bar */}
//           <Box
//             component="form"
//             onSubmit={handleSearch}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: "#f3f3f3",
//               padding: "8px 14px",
//               borderRadius: "8px",
//               flex: 1,
//               maxWidth: "500px",
//             }}
//           >
//             <FaSearch size={18} color="#666" />
//             <InputBase
//               placeholder="Search for restaurants, cuisine..."
//               sx={{ marginLeft: "10px", flex: 1 }}
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </Box>

//           {/* Navigation Icons */}
//           <Box display="flex" alignItems="center" gap={2}>
//             {!isAuthenticated ? (
//               <>
//                 <Button
//                   onClick={() => navigate("/login")}
//                   sx={{ color: "#ff4f5a", fontWeight: "bold" }}
//                 >
//                   Login
//                 </Button>
//                 <Button
//                   onClick={() => navigate("/signup")}
//                   variant="contained"
//                   sx={{ backgroundColor: "#ff4f5a", "&:hover": { backgroundColor: "#e6444f" } }}
//                 >
//                   Sign up
//                 </Button>
//               </>
//             ) : (
//               <Button onClick={() => dispatch(logout())} sx={{ color: "#ff4f5a", fontWeight: "bold" }}>
//                 Logout
//               </Button>
//             )}
//             <IconButton onClick={() => handleProtectedNavigation("/orders")} sx={{ color: "#666" }}>
//               <MdOutlineWork size={24} />
//             </IconButton>
//             <IconButton onClick={() => handleProtectedNavigation("/orders")} sx={{ color: "#666" }}>
//               <IoMdNotificationsOutline size={24} />
//             </IconButton>
//             <IconButton onClick={handleMenu} sx={{ color: "#666" }}>
//               <FaUserCircle size={26} />
//             </IconButton>
//             <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
//               <MenuItem onClick={handleClose}>Profile</MenuItem>
//               <MenuItem onClick={() => handleProtectedNavigation("/orders")}>Orders</MenuItem>
//               <MenuItem onClick={()=>{navigate('/driver-dashboard')}}>Drivers</MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Header;

// import React, { useEffect, useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   InputBase,
//   IconButton,
//   Menu,
//   MenuItem,
//   Button,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Paper,
// } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { MdOutlineWork } from "react-icons/md";
// import { FaUserCircle, FaSearch, FaLocationArrow } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../store/store";
// import { resetTokens } from "../store/reducers/authReducer";
// import { useGetRecommendationsQuery, useGetSuggestionsQuery } from "../services/api";

// const Header: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
//   const dispatch = useDispatch();

//   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const { data: suggestionsData } = useGetSuggestionsQuery(
//     { name: searchQuery },
//     { skip: searchQuery.length === 0 }
//   );

//   useEffect(() => {
//     if (suggestionsData) {
//       setSuggestions(suggestionsData);
//     }
//   }, [suggestionsData]);

//   const handleRestaurantClick = (restaurant: string) => {
//     navigate(`/restaurant?name=${encodeURIComponent(restaurant)}&query=${encodeURIComponent(searchQuery)}`);
//   };
  
//   const handleSuggestClick = () => {
//     if (searchQuery) {
//       navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
//     }
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position="static"
//         sx={{
//           backgroundColor: "#fff",
//           boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//           padding: "8px 0",
//         }}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Box component={Link} to="/" display="flex" alignItems="center" sx={{ textDecoration: "none", color: "#333" }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ff4f5a" }}>Foodigy</Typography>
//             <IconButton sx={{ color: "#666", marginLeft: 1 }}>
//               <FaLocationArrow size={16} />
//             </IconButton>
//             <Typography variant="body2" sx={{ color: "#666", marginLeft: "4px" }}>Mohali, India</Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#f3f3f3", padding: "8px 14px", borderRadius: "8px", flex: 1, maxWidth: "500px", position: "relative" }}>
//             <FaSearch size={18} color="#666" />
//             <InputBase
//               placeholder="Search for restaurants, cuisine..."
//               sx={{ marginLeft: "10px", flex: 1 }}
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Button onClick={handleSuggestClick} sx={{ marginLeft: "10px", fontWeight: "bold" }}>Suggest</Button>
//           </Box>

//           {suggestions.length > 0 && (
//             <Paper
//               sx={{
//                 position: "absolute",
//                 top: "60px",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: "500px",
//                 maxHeight: "300px",
//                 overflowY: "auto",
//                 zIndex: 10,
//                 backgroundColor: "#fff",
//                 boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
//               }}
//             >
//               <List>
//                 {suggestions.map((restaurant, index) => (
//                   <ListItem button key={index} onClick={() => handleRestaurantClick(restaurant)}>
//                     <ListItemText primary={restaurant} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Paper>
//           )}

//           <Box display="flex" alignItems="center" gap={2}>
//             {!isAuthenticated ? (
//               <>
//                 <Button onClick={() => navigate("/login")} sx={{ color: "#ff4f5a", fontWeight: "bold" }}>Login</Button>
//                 <Button onClick={() => navigate("/signup")} variant="contained" sx={{ backgroundColor: "#ff4f5a", "&:hover": { backgroundColor: "#e6444f" } }}>Sign up</Button>
//               </>
//             ) : (
//               <Button onClick={() => dispatch(resetTokens())} sx={{ color: "#ff4f5a", fontWeight: "bold" }}>Logout</Button>
//             )}
//             <IconButton onClick={() => navigate("/orders")} sx={{ color: "#666" }}>
//               <MdOutlineWork size={24} />
//             </IconButton>
//             <IconButton onClick={() => navigate("/notifications")} sx={{ color: "#666" }}>
//               <IoMdNotificationsOutline size={24} />
//             </IconButton>
//             <IconButton onClick={handleMenu} sx={{ color: "#666" }}>
//               <FaUserCircle size={26} />
//             </IconButton>
//             <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
//               <MenuItem onClick={handleClose}>Profile</MenuItem>
//               <MenuItem onClick={() => navigate("/orders")}>Orders</MenuItem>
//               <MenuItem onClick={() => navigate("/driver-dashboard")}>Drivers</MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Header;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaLocationArrow } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useLogoutMutation } from "../services/api";
import { useGetSuggestionsQuery } from "../services/api"; // Import your API hook

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [logoutUser]=useLogoutMutation()

  // ✅ Fetch suggestions when user types
  const { data: response = [], isLoading } = useGetSuggestionsQuery(searchQuery, {
    skip: searchQuery.length < 2, // Skip API call if query length is less than 2
  });
  const suggestions = response?.data || [];
  console.log("data",suggestions)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSuggestionClick = (restaurantName: string) => {
    setSearchQuery(""); // Clear search input
    navigate(`/restorents?search=${encodeURIComponent(restaurantName)}`);
  };

  const handleCLose=(route='logout')=>{
    return()=>{
      if(route){
        if(route=='logout'){
          logoutUser()
        }
      }
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          padding: "8px 0",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo + Location */}
          <Box
            component={Link}
            to="/"
            display="flex"
            alignItems="center"
            sx={{ textDecoration: "none", color: "#333" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ff4f5a" }}>
              Foodigy
            </Typography>
            <IconButton sx={{ color: "#666", marginLeft: 1 }}>
              <FaLocationArrow size={16} />
            </IconButton>
            <Typography variant="body2" sx={{ color: "#666", marginLeft: "4px" }}>
              Mohali, India
            </Typography>
          </Box>

          {/* Search Bar with Suggestions */}
          <Box sx={{ position: "relative", maxWidth: "500px", flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f3f3f3",
                padding: "8px 14px",
                borderRadius: "8px",
                width: "100%",
              }}
            >
              <FaSearch size={18} color="#666" />
              <InputBase
                placeholder="Search for restaurants, cuisine..."
                sx={{ marginLeft: "10px", flex: 1 }}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Box>
{/* Suggestions Dropdown */}
{searchQuery && suggestions.length > 0 && (
  <Box sx={{ position: "absolute", width: "100%", top: "100%", left: 0, zIndex: 10 }}>
    <Paper
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        mt: 1,
        maxHeight: "300px",
        overflowY: "auto",
      }}
    >
      <List sx={{ width: "100%" }}>
        {suggestions.map((name: string, index: number) => (
          <ListItem
            key={index}
            component="button"
            onClick={() => handleSuggestionClick(name)}
            sx={{
              padding: "10px",
              borderRadius: "4px",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  </Box>
)}



          </Box>

          {/* Navigation Icons */}
          <Box display="flex" alignItems="center" gap={2}>
            {!isAuthenticated ? (
              <>
                <Button
                  onClick={() => navigate("/login")}
                  sx={{ color: "#ff4f5a", fontWeight: "bold" }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate("/signup")}
                  variant="contained"
                  sx={{ backgroundColor: "#ff4f5a", "&:hover": { backgroundColor: "#e6444f" } }}
                >
                  Sign up
                </Button>
               
              </>
            ) : (
              <>
              <Button onClick={handleCLose('logout')} sx={{ color: "#ff4f5a", fontWeight: "bold" }}>
                Logout
              </Button>
               <Button
               onClick={() => navigate("/orders")}
               variant="contained"
               sx={{ backgroundColor: "#ff4f5a", "&:hover": { backgroundColor: "#e6444f" } }}
             >
               Cart
             </Button>
             </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;


