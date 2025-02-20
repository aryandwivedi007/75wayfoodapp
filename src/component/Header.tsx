

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
//   const dispatch = useDispatch();
//   console.log("is authenticated",isAuthenticated)
//   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/food?search=${encodeURIComponent(searchQuery)}`);
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
//                   sx={{
//                     backgroundColor: "#ff4f5a",
//                     "&:hover": { backgroundColor: "#e6444f" },
//                   }}
//                 >
//                   Sign up
//                 </Button>
//               </>
//             ) : (
//               <Button
//                 onClick={() => dispatch(logout())}
//                 sx={{ color: "#ff4f5a", fontWeight: "bold" }}
//               >
//                 Logout
//               </Button>
//             )}
//             <IconButton
//               onClick={() => handleProtectedNavigation("/orders")}
//               sx={{ color: "#666" }}
//             >
//               <MdOutlineWork size={24} />
//             </IconButton>
//             <IconButton
//               onClick={() => handleProtectedNavigation("/orders")}
//               sx={{ color: "#666" }}
//             >
//               <IoMdNotificationsOutline size={24} />
//             </IconButton>
//             <IconButton onClick={handleMenu} sx={{ color: "#666" }}>
//               <FaUserCircle size={26} />
//             </IconButton>
//             <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
//               <MenuItem onClick={handleClose}>Profile</MenuItem>
//               <MenuItem onClick={() => handleProtectedNavigation("/orders")}>
//                 Orders
//               </MenuItem>
//               <MenuItem onClick={handleClose}>Settings</MenuItem>
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
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { FaUserCircle, FaSearch, FaLocationArrow } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { logout } from "../store/reducers/authReducer";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  // Get partner applications from Redux (partner slice)
  const partnerApplications = useSelector((state: RootState) => state.partner.applications);
  const dispatch = useDispatch();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Check if any partner application restaurant name matches the query (case-insensitive)
      const matchedPartner = partnerApplications.find((app: any) =>
        app.restaurantName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matchedPartner) {
        navigate(`/restorents?search=${encodeURIComponent(searchQuery)}`);
      } else {
        navigate(`/food?search=${encodeURIComponent(searchQuery)}`);
      }
    }
  };

  const handleProtectedNavigation = (path: string) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      navigate("/login");
    }
  };

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

          {/* Search Bar */}
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f3f3f3",
              padding: "8px 14px",
              borderRadius: "8px",
              flex: 1,
              maxWidth: "500px",
            }}
          >
            <FaSearch size={18} color="#666" />
            <InputBase
              placeholder="Search for restaurants, cuisine..."
              sx={{ marginLeft: "10px", flex: 1 }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
              <Button onClick={() => dispatch(logout())} sx={{ color: "#ff4f5a", fontWeight: "bold" }}>
                Logout
              </Button>
            )}
            <IconButton onClick={() => handleProtectedNavigation("/orders")} sx={{ color: "#666" }}>
              <MdOutlineWork size={24} />
            </IconButton>
            <IconButton onClick={() => handleProtectedNavigation("/orders")} sx={{ color: "#666" }}>
              <IoMdNotificationsOutline size={24} />
            </IconButton>
            <IconButton onClick={handleMenu} sx={{ color: "#666" }}>
              <FaUserCircle size={26} />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={() => handleProtectedNavigation("/orders")}>Orders</MenuItem>
              <MenuItem onClick={()=>{navigate('/driver-dashboard')}}>Drivers</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

