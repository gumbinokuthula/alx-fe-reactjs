// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Post from "./components/Post";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // simple auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Protected Profile with nested routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route for posts */}
        <Route path="/post/:id" element={<Post />} />

        {/* Login route */}
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
