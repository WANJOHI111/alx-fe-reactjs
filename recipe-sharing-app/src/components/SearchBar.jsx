import { useRecipeStore } from '../recipeStore';

function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        display: 'block',
        margin: '10px 0',
        padding: '8px',
        width: '100%',
      }}
    />
  );
}

export default SearchBar;
