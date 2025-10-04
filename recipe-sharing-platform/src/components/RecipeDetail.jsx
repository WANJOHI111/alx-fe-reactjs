import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-500">Loading recipe...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">{recipe.title}</h1>

          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="border-t pt-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>1 tbsp olive oil</li>
              <li>2 cloves garlic, minced</li>
              <li>Salt and pepper to taste</li>
              <li>Other key ingredients...</li>
            </ul>
          </div>

          <div className="border-t pt-4 mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Cooking Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Preheat your pan or oven.</li>
              <li>Add ingredients step by step.</li>
              <li>Simmer until cooked and aromatic.</li>
              <li>Serve and enjoy!</li>
            </ol>
          </div>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-block text-blue-500 font-medium hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
