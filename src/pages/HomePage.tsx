import { Box } from "@chakra-ui/react";
// import { Categories } from "../sections/CategoriesSection";
// import { Featured } from "../sections/FeaturedSection";
// import { MoreRecipes } from "../sections/MoreRecipesSection";
// import { Navbar } from "../sections/NavbarSection";
// import { PopularRecipies } from "../sections/PopularRecipesSection";
// import { SpaceComponent } from "../components/SpaceComponent";
// import { TopCuisinesSection } from "../sections/TopCuisinesSection";
// import TrendingRecipeCard from "../components/cards/TrendingRecipeCard/TrendingRecipeCard";
// import { Flexbox } from "../components/wrapper/Flexbox";
import TrendingSection from "../sections/homepage/TrendingSection";
// import Container from "../components/wrapper/Container";
// import { Outlet } from "react-router-dom";
// import { MainMenu } from "../components/MainMenu";

export const HomePage = () => {
  document.title = "Recipo | Home";
  return (
    <Box>
      {/* <Navbar person={"Stranger"} /> */}
      {/* <Featured /> */}
      {/* <Categories /> */}
      {/* <PopularRecipies /> */}
      {/* <TopCuisinesSection /> */}
      {/* <MoreRecipes /> */}
      {/* <SpaceComponent /> */}
      <TrendingSection />
      <TrendingSection />
      <TrendingSection />
      <TrendingSection />
    </Box>
  );
};
