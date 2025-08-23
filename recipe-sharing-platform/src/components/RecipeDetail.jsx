import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <p className="mb-4">{recipe.summary}</p>
      <h2 className="text-xl font-semibold">Ingredients:</h2>
      <ul className="list-disc ml-6 mb-4">
        {recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <h2 className="text-xl font-semibold">Instructions:</h2>
      <ol className="list-decimal ml-6">
        {recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)}
      </ol>
    </div>
  );
}

export default RecipeDetail;
