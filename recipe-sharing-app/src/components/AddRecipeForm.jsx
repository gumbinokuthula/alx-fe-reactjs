import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const recipes = useRecipeStore((state) => state.recipes);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now().toString(),
      title,
      description,
    };
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Recipe</button>
      </form>

      <h3>Recipes:</h3>
      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <Link to={`/recipes/${r.id}`}>{r.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddRecipeForm;
