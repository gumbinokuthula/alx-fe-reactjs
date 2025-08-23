import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">Recipe not found</h2>
        <Link to="/" className="text-blue-500 underline mt-4 block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/" className="text-blue-500 underline mb-4 block">
        ← Back to Home
      </Link>
      <div className="bg-white shadow-md rounded-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-4">{recipe.summary}</p>
        <p className="text-gray-600">{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
