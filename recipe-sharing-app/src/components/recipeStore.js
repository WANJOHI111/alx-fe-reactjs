import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return {
        recipes: updated,
        filteredRecipes: get().applyFilter(updated, state.searchTerm),
      };
    }),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      );
      return {
        recipes: updated,
        filteredRecipes: get().applyFilter(updated, state.searchTerm),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: get().applyFilter(updated, state.searchTerm),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: get().applyFilter(state.recipes, term),
    })),

  applyFilter: (recipes, term) =>
    recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    ),
}));


