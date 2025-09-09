import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => addFavorite(recipe.id)}
            >
               Add to Favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;



