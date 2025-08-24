import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Simple auth check

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect if not authenticated
  }

  return children; // Render protected content if authenticated
};

export default ProtectedRoute;
