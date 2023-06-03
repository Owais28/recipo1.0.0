
import { BUY_CAKE, RECIPE_FETCHED, SEARCH_RECIPE, LOADING_TRUE } from "./actionTypes";

// buyCake() Action Creater
export const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "Buy a cake from the store",
  };
};

export const SearchRecipe = (recipe: string) => {
  return {
    type: SEARCH_RECIPE,
    info: "Search This Recipe",
    payload: {
      recipeToSearch: recipe,
    },
  };
};

/**
 * This action creator returns a action of 
 * @param resipes array of searched recipe
 * @returns Action with payload
 */
export const fillRecipes = (resipes: Array<object> | object | unknown) => {
  return {
    type: RECIPE_FETCHED,
    info: "Fill search results array",
    payload: {
      resultsOfSearch: resipes,
    },
  };
};

export const setLoadingTrue = () => {
  return {
    type: LOADING_TRUE,
    info: "Searching for recipes",
  };
};
