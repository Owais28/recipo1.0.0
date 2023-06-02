import { Box, Link, Text } from "@chakra-ui/react";
import { CuisineCard } from "../components/cards/CuisineCard";
import { Flexbox } from "../components/wrapper/Flexbox";

export const TopCuisinesSection = () => {
  const cuisineData = [
    {
      imageUrl: "https://spoonacular.com/recipeImages/798400-312x231.jpg",
      cuisineTitle: "Indian",
      cuisineLink: "",
    },
    {
      imageUrl: "https://spoonacular.com/recipeImages/644826-312x231.jpg",
      cuisineTitle: "Chinese",
      cuisineLink: "",
    },
    {
      imageUrl: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
      cuisineTitle: "American",
      cuisineLink: "",
    },
    {
      imageUrl: "https://spoonacular.com/recipeImages/715495-312x231.jpg",
      cuisineTitle: "European",
      cuisineLink: "",
    },
    {
      imageUrl: "https://spoonacular.com/recipeImages/633754-312x231.jpg",
      cuisineTitle: "French",
      cuisineLink: "",
    },
    {
      imageUrl: "https://spoonacular.com/recipeImages/766453-312x231.jpg",
      cuisineTitle: "Middle Eastern",
      cuisineLink: "",
    },
    {
      imageUrl: "https://spoonacular.com/recipeImages/1095806-312x231.jpg",
      cuisineTitle: "Spanish",
      cuisineLink: "",
    },
    {
      imageUrl: "https://spoonacular.com/recipeImages/715769-312x231.jpg",
      cuisineTitle: "Italian",
      cuisineLink: "",
    },
    {
      imageUrl: "https://spoonacular.com/recipeImages/660697-312x231.jpg",
      cuisineTitle: "Southern",
      cuisineLink: "",
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
        Top Cuisines{" "}
        <Link color="teal.500" fontWeight={"normal"} fontSize={"small"} href="#">
          See all
        </Link>
      </Text>

      <Box width="100%">
        <Flexbox height={"auto"}>
          {cuisineData.map((cuisine) => (
            <CuisineCard
              cuisineLink={cuisine.cuisineLink}
              cuisineTitle={cuisine.cuisineTitle}
              imgUrl={cuisine.imageUrl}
            />
          ))}
        </Flexbox>
      </Box>
    </Box>
  );
};
