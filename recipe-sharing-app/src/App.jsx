import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

const App = () => (
  <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
    <h1>Recipe Sharing App</h1>
    <SearchBar />
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ flex: 2 }}>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
      <div style={{ flex: 1 }}>
        <FavoritesList />
        <RecommendationsList />
      </div>
    </div>
  </div>
);

export default App;
