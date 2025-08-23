// src/components/RecipeDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import recipes from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useMemo(
    () => recipes.find((r) => r.id === recipeId),
    [recipeId]
  );

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
          {recipe.description && (
            <p className="mt-4 text-gray-600 leading-relaxed">
              {recipe.description}
            </p>
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
