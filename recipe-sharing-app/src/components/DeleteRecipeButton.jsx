import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      navigate("/");
    }
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px', color: 'red' }}>
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;
