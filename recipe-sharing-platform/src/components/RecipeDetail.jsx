// src/components/RecipeDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import recipes from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const recipeId = Number(id);

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = recipes.find((r) => r.id === recipeId);
    setRecipe(found || null);
  }, [recipeId]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-white rounded-xl shadow p-8 text-center">
          <h1 className="text-2xl font-semibold text-red-600 mb-4">
            Recipe not found
          </h1>
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900">{recipe.title}</h1>
          {recipe.summary && (
            <p className="mt-3 text-gray-700">{recipe.summary}</p>
          )}

          {/* Ingredients */}
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Ingredients</h2>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {recipe.ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Instructions */}
          {recipe.instructions && recipe.instructions.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Instructions</h2>
              <ol className="list-decimal list-inside mt-2 text-gray-700 space-y-1">
                {recipe.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          <div className="mt-6">
            <Link
              to="/"
              className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              ← Back to Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
