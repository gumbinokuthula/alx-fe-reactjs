import AddRecipe from "./components/AddRecipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
