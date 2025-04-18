// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSidebar from "./pages/Sidebar";
import AdminProducts from "./pages/AdminProducts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route
          path="/admindashboard"
          element={<AdminDashboard />}
          key="admindashboard"
        />
        <Route path="/adminsidebar" element={<AdminSidebar />} />
      <Route path="/adminproject" element={<AdminProducts />}/>
      </Routes>
    </Router>
  );
};

export default App;
