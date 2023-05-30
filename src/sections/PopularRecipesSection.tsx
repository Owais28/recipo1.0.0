import { Box,Link, Text } from "@chakra-ui/react";
import { RecipeCard1 } from "../components/cards/RecipeCard1";
import { Flexbox } from "../components/wrapper/Flexbox";

export const PopularRecipies = () => {
  const recipiesByNutrients = [
    {
      id: 634141,
      title: "Banana Oatmeal Breakfast Muffins",
      image: "https://spoonacular.com/recipeImages/634141-312x231.jpg",
      imageType: "jpg",
      calories: 148,
      protein: "4g",
      fat: "3g",
      carbs: "27g",
    },
    {
      id: 644826,
      title: "Gluten Free Dairy Free Sugar Free Chinese Chicken Salad",
      image: "https://spoonacular.com/recipeImages/644826-312x231.jpg",
      imageType: "jpg",
      calories: 351,
      protein: "31g",
      fat: "15g",
      carbs: "27g",
    },
    {
      id: 650499,
      title: "Lychee Granita",
      image: "https://spoonacular.com/recipeImages/650499-312x231.jpg",
      imageType: "jpg",
      calories: 78,
      protein: "0g",
      fat: "0g",
      carbs: "21g",
    },
    {
      id: 653270,
      title: "Nori Seaweed Muffins",
      image: "https://spoonacular.com/recipeImages/653270-312x231.jpg",
      imageType: "jpg",
      calories: 250,
      protein: "4g",
      fat: "14g",
      carbs: "27g",
    },
    {
      id: 657095,
      title: "Prawn Curry",
      image: "https://spoonacular.com/recipeImages/657095-312x231.jpg",
      imageType: "jpg",
      calories: 458,
      protein: "29g",
      fat: "17g",
      carbs: "47g",
    },
    {
      id: 657359,
      title: "Pumpkin Pie Smoothie",
      image: "https://spoonacular.com/recipeImages/657359-312x231.jpg",
      imageType: "jpg",
      calories: 150,
      protein: "10g",
      fat: "3g",
      carbs: "22g",
    },
    {
      id: 660261,
      title: "Slow Cooked Applesauce",
      image: "https://spoonacular.com/recipeImages/660261-312x231.jpg",
      imageType: "jpg",
      calories: 62,
      protein: "0g",
      fat: "0g",
      carbs: "16g",
    },
    {
      id: 660525,
      title: "Soft-Baked Pretzels",
      image: "https://spoonacular.com/recipeImages/660525-312x231.jpg",
      imageType: "jpg",
      calories: 376,
      protein: "7g",
      fat: "22g",
      carbs: "41g",
    },
    {
      id: 663824,
      title: "Trinidadian Chicken Potato Curry",
      image: "https://spoonacular.com/recipeImages/663824-312x231.jpg",
      imageType: "jpg",
      calories: 554,
      protein: "35g",
      fat: "37g",
      carbs: "20g",
    },
    {
      id: 716195,
      title: "Spicy Indian-Style Hummus",
      image: "https://spoonacular.com/recipeImages/716195-312x231.jpg",
      imageType: "jpg",
      calories: 134,
      protein: "5g",
      fat: "6g",
      carbs: "15g",
    },
  ];

  return (
    <Box maxW={"md"} my={3}>
      <Text
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        fontSize="lg"
        fontFamily={"Rubik"}
        color="#0C2628"
        fontWeight={"semibold"}
        mr={3}
        pl={3}
      >
        Popular Recipes{" "}
        <Link
          color="teal.500"
          fontWeight={"normal"}
          fontSize={"small"}
          href="#"
        >
          See all
        </Link>
      </Text>

      <Box width="100%">
        <Flexbox height={"auto"}>
          {recipiesByNutrients.map((recipe) => (
            <RecipeCard1
              title={recipe.title}
              imgURL={recipe.image}
              calories={recipe.calories}
              carbs={recipe.carbs}
              protein={recipe.protein}
              fat={recipe.fat}
              id={recipe.id}
              key={recipe.id}
            />
          ))}
        </Flexbox>
      </Box>
    </Box>
  );
};
