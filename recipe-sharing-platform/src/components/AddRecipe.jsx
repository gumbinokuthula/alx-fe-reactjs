// src/components/AddRecipe.jsx
import { useState } from "react";

export default function AddRecipe() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !image || !summary || !ingredients || !instructions) {
      alert("Please fill in all fields.");
      return;
    }

    const newRecipe = {
      title,
      image,
      summary,
      ingredients: ingredients.split("\n"), // split by line
      instructions: instructions.split("\n"),
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Reset form
    setTitle("");
    setImage("");
    setSummary("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">
        Add New Recipe
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={3}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Ingredients (one per line)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Instructions (one per line)"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
