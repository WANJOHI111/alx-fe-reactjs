import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((fid) => fid !== id),
    })),

  // ❤️ Favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // prevent duplicates
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // ⭐ Mock Recommendations
  generateRecommendations: () =>
    set((state) => {
      const favRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );

      // Mock: recommend random recipes not already in favorites
      const recommended = state.recipes.filter(
        (r) => !state.favorites.includes(r.id) && Math.random() > 0.5
      );

      return { recommendations: [...favRecipes, ...recommended] };
    }),
}));


