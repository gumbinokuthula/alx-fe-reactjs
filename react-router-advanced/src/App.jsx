import Profile from "./components/Profile";

// ... inside <Routes>
<Route
  path="/profile/*"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
