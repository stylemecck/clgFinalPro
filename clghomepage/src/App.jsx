import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSidebar from "./pages/Sidebar";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";
import CartPage from "./pages/CartPage";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <Router>
      {/* Navbar should be inside Router to handle routing properly */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/adminsidebar" element={<AdminSidebar />} />
        <Route path="/adminproducts" element={<AdminProducts />} />
        <Route path="/adminorders" element={<AdminOrders />} />
      </Routes>
    </Router>
  );
};

export default App;
