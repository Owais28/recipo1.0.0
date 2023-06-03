// import axios from "axios";
// import { fillRecipes, setLoadingTrue } from "./clientActions";

// export const fetchRecipes = (searchTerm: string = "pizza") => {
//   return (dispatch) => {
//     dispatch(setLoadingTrue());
//     axios
//       .get(
//         `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=f05e9379b7634f34bec1b7dc4df4fe65&number=25`
//       )
//       .then((res: any) => {
//         console.log(res.data);
//         dispatch(fillRecipes(res.data.results));
//       });
//   };
// };
