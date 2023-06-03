// import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// // import { LOADING_TRUE, RECIPE_FETCHED, SEARCH_RECIPE } from "./actionTypes";

// export const searchStore = {
//   // this is used to know what user is searching about
//   searchQuery: "",
//   // this array stores all searched recipes
//   searchResults: [],
//   isLoading: false,
//   // this array keeps record of all fetched recipes so that we dont have to
//   // re-fetch same recipe
//   fetchedRecipes: [
//     {
//       recipeTitle: "",
//       recipeIndex: 0,
//     },
//   ],
//   // this array stores data of all fetched recipes into an array
//   recipeInfo: [],
// };

// //
// // export const searchReducer = (store = searchStore, action: object) => {
// //   switch (action.type) {
// //     case SEARCH_RECIPE:
// //       return {
// //         ...store,
// //         searchQuery: action.payload.recipeToSearch,
// //       };
// //     case RECIPE_FETCHED:
// //       return {
// //         ...store,
// //         searchResults: action.payload.resultsOfSearch,
// //         isLoading: false,
// //       };
// //     case LOADING_TRUE:
// //       return {
// //         ...store,
// //         isLoading: true,
// //       };
// //     default:
// //       return store;
// //   }
// // };

// export const store = configureStore({
//   reducer: searchReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });
