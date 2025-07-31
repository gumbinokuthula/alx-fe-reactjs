import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default App;
