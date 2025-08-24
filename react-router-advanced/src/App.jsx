import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected route example */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <h2>Dashboard - Protected</h2>
            </ProtectedRoute>
          }
        />

        {/* Dynamic route example */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
