function RecipeCard({ title, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-full sm:w-64 md:w-72">
      <img src={image} alt={title} className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
