import { Link } from "react-router-dom";

// Inside your recipes.map(...)
<div key={recipe.id} className="bg-white shadow rounded-lg overflow-hidden">
  <Link to={`/recipe/${recipe.id}`}>
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-48 object-cover"
    />
  </Link>
  <div className="p-4">
    <h2 className="text-xl font-bold">{recipe.title}</h2>
    <p className="text-gray-600">{recipe.summary}</p>
    <Link
      to={`/recipe/${recipe.id}`}
      className="text-blue-500 hover:underline"
    >
      View Recipe →
    </Link>
  </div>
</div>
