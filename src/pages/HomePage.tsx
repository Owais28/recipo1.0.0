import { Box } from "@chakra-ui/react";
// import { Categories } from "../sections/CategoriesSection";
// import { Featured } from "../sections/FeaturedSection";
// import { MoreRecipes } from "../sections/MoreRecipesSection";
// import { Navbar } from "../sections/NavbarSection";
// import { PopularRecipies } from "../sections/PopularRecipesSection";
// import { SpaceComponent } from "../components/SpaceComponent";
// import { TopCuisinesSection } from "../sections/TopCuisinesSection";
import TrendingRecipeCard from "../components/cards/TrendingRecipeCard/TrendingRecipeCard";
import { Flexbox } from "../components/wrapper/Flexbox";

export const HomePage = () => {
  document.title = "Recipo | Home";
  return (
    <Box
      maxW={"md"}
      //   width={'sm'}
      minH={"100vh"}
      bg={"gray.50"}
      // bgGradient={"linear(to-b,#fff,#fff,,#fff,green.50)"}
      fontFamily={"Rubik"}
      overflow="auto"
      // p={3}
    >
      {/* <Navbar person={"Stranger"} /> */}
      {/* <Featured /> */}
      {/* <Categories /> */}
      {/* <PopularRecipies /> */}
      {/* <TopCuisinesSection /> */}
      {/* <MoreRecipes /> */}
      {/* <SpaceComponent /> */}
      <Flexbox height={"max-content"}>
        {[...new Array(50)].map(() => (
          <TrendingRecipeCard
          // key={key}
          // chef={{ name: "Owais Athar", verified: true }}
          // imgUrl="sffds"
          // reviews={10}
          // reviewsOnScale={4.5}
          // title="Make dssd ds"
          // timeRequired={100}
          />
        ))}
      </Flexbox>
    </Box>
  );
};
