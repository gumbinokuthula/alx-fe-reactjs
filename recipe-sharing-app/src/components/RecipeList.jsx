import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '20px' }}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <Link to={`/edit/${recipe.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
