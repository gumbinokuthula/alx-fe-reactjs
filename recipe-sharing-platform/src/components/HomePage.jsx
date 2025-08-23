import RecipeCard from "./RecipeCard";

const recipes = [
  {
    title: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish with rich meat sauce.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Chicken Curry",
    description: "A spicy and flavorful Indian curry.",
    image: "https://via.placeholder.com/300x200",
  },
  // Add more recipes here
];

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>
      <div className="flex flex-wrap justify-center">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
