import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";
import Register from "./Register";
import Login from "./Login";
import { AuthProvider, useAuth } from "./AuthContext";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { authUser } = useAuth();

  if (!authUser) return <Navigate to="/login" />;
  if (adminOnly && !authUser.isAdmin) return <Navigate to="/" />;
  
  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-panel"
          element={
            <ProtectedRoute adminOnly>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        {/* Ostale rute */}
      </Routes>
    </AuthProvider>
  );
};

export default App;
