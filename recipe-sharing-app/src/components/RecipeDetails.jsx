// inside RecipeDetail.jsx (or wherever you show a single recipe)
import { useRecipeStore } from './recipeStore';

const RecipeDetail = () => {
  // existing logic to get recipe by id...
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) return <p>Recipe not found.</p>;

  const isFav = favorites.includes(recipe.id);

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button
        onClick={() => (isFav ? removeFavorite(recipe.id) : addFavorite(recipe.id))}
      >
        {isFav ? 'Unfavorite' : 'Add to Favorites'}
      </button>
      {/* Include Edit/Delete etc. */}
    </div>
  );
};
