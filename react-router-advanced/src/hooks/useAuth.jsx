// src/hooks/useAuth.jsx
import { useState } from "react";

const useAuth = () => {
  // Simulate an authenticated user
  const [isAuthenticated] = useState(true); // change to false to test redirection

  return { isAuthenticated };
};

export default useAuth;
