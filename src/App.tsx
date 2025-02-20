
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import LandingPage from "./component/LandingPage";
import FoodPage from "./component/FoodPage";
import OrderPage from "./pages/orderpage";
import BecomePartnerPage from "./pages/becomepartner";
import LoginPage from "./pages/loginpage";
import SignupPage from "./pages/signuppage";
import useNotificationPermission from "./hooks/useNotificationPermission";
import { AuthProvider } from "./context/AuthContext";
import Restorents from "./pages/restorents";
import Home from "./pages/homepage";
import Food from "./pages/foodpage";
import DriverDashboard from "./pages/DriverDashboard";

function App() {
  useNotificationPermission();
  return (
    <AuthProvider>
    <Router>
      <Header /> {/* Keep Header outside Routes */}
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/restorents"  element={< Restorents/>} />
        <Route path="/orders" element={<OrderPage/>}/>
        <Route path="/become-partner" element={<BecomePartnerPage/>}/>
        <Route path="/driver-dashboard" element={<DriverDashboard/>}/>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;

