import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom'; // ✅ must be included

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ even if not used

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // ✅ navigate to home after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
