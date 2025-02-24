

// import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
// import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import pizza from "../assets/pizza.jpg";
// import sushi from "../assets/sushi.jpg";

// const Restorents: React.FC = () => {
//   const applications = useSelector((state: RootState) => state.partner.applications);
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const query = searchParams.get("search")?.toLowerCase() || "";

//   const filteredApplications = applications.filter((app: any) =>
//     app.restaurantName.toLowerCase().includes(query)
//   );

//   if (filteredApplications.length === 0) {
//     return (
//       <Box sx={{ p: 3, textAlign: "center" }}>
//         <Typography variant="h6" color="text.secondary">
//           No matching restaurants found.
//         </Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ff4f5a", mb: 3 }}>
//         Restaurants
//       </Typography>
//       <Grid container spacing={3}>
//         {filteredApplications.map((app: any, index: number) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card sx={{ borderRadius: 2 }}>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={index % 2 === 0 ? pizza : sushi}
//                   alt={app.restaurantName}
//                 />
//                 <CardContent>
//                   <Typography variant="h6" align="center" sx={{ fontWeight: "bold", mb: 1 }}>
//                     {app.restaurantName}
//                   </Typography>
//                   <Typography variant="body2" align="center" sx={{ mb: 1 }}>
//                     Cuisine: {app.cuisine}
//                   </Typography>
//                   <Typography variant="body2" align="center">
//                     Address: {app.address}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Restorents;

import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useGetSuggestionsQuery } from "../services/api"; // Import API hook
import pizza from "../assets/pizza.jpg";
import sushi from "../assets/sushi.jpg";

const Restorents: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query")?.toLowerCase() || "";

  // Fetch restaurant list from backend
  const { data: restaurants, isLoading, isError } = useGetSuggestionsQuery({ name: query });

  if (isLoading) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !restaurants || restaurants.length === 0) {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          No matching restaurants found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ff4f5a", mb: 3 }}>
        Restaurants
      </Typography>
      <Grid container spacing={3}>
        {restaurants.map((restaurant: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={{ borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={index % 2 === 0 ? pizza : sushi}
                  alt={restaurant.name}
                />
                <CardContent>
                  <Typography variant="h6" align="center" sx={{ fontWeight: "bold", mb: 1 }}>
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ mb: 1 }}>
                    Cuisine: {restaurant.cuisine}
                  </Typography>
                  <Typography variant="body2" align="center">
                    Address: {restaurant.address}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Restorents;
