// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  const favorites = useRecipeStore((state) => state.favorites);

  // Regenerate when favorites change
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  if (recommendations.length === 0) {
    return <p>No recommendations right now. Favorite recipes to get suggestions.</p>;
  }

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '6px',
          }}
        >
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
