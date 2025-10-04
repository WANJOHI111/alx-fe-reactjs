import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";

    // Optional: check at least 2 ingredients
    const ingredientList = ingredients.split(",").map((i) => i.trim());
    if (ingredientList.length < 2)
      newErrors.ingredients = "Please include at least 2 ingredients";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        steps: steps.split("\n").map((step) => step.trim()),
      };

      console.log("Recipe submitted:", newRecipe);

      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-lg bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Add a New Recipe 🍽️
        </h1>

        {success && (
          <div className="bg-green-100 text-green-700 p-3 mb-4 rounded-lg text-center">
            Recipe submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Ingredients <span className="text-sm text-gray-400">(separate with commas)</span>
            </label>
            <textarea
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              }`}
              rows="3"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g., Flour, Sugar, Eggs, Milk"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Preparation Steps <span className="text-sm text-gray-400">(one per line)</span>
            </label>
            <textarea
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.steps ? "border-red-500" : "border-gray-300"
              }`}
              rows="4"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder="Step 1: Mix ingredients...\nStep 2: Bake for 30 minutes..."
            ></textarea>
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;

