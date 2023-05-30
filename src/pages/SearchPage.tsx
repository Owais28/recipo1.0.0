import {
  Box,
  Heading,
  HStack,
  VStack,
  // Wrap,
  // WrapItem
} from "@chakra-ui/react";
import { connect } from "react-redux";
// import { BiArrowBack } from "react-icons/bi";
// import { connect } from "react-redux";
import { RecipeCardHorizontal } from "../components/cards/RecipeCardHorizontal";
import { SearchInput } from "../components/SearchInput";
import { SearchRecipe } from "../redux/clientActions";
import { fetchRecipes } from "../redux/serverActions";
// import { SearchRecipe } from "../redux/clientActions";
// import { fetchRecipes } from "../redux/serverActions";
// import { fetchRecipes, SearcRecipe } from "../redux/rootStore";
// import { useNavigate } from "react-router-dom";

const SearchPage = ( props: any) => {
  document.title = "Recipo | Profile";
  // console.log(props)
  // const recipiesByNutrients = [
  //   {
  //     id: 634141,
  //     title: "Banana Oatmeal Breakfast Muffins",
  //     image: "https://spoonacular.com/recipeImages/634141-312x231.jpg",
  //     imageType: "jpg",
  //     calories: 148,
  //     protein: "4g",
  //     fat: "3g",
  //     carbs: "27g",
  //   },
  //   {
  //     id: 644826,
  //     title: "Gluten Free Dairy Free Sugar Free Chinese Chicken Salad",
  //     image: "https://spoonacular.com/recipeImages/644826-312x231.jpg",
  //     imageType: "jpg",
  //     calories: 351,
  //     protein: "31g",
  //     fat: "15g",
  //     carbs: "27g",
  //   },
  //   {
  //     id: 650499,
  //     title: "Lychee Granita",
  //     image: "https://spoonacular.com/recipeImages/650499-312x231.jpg",
  //     imageType: "jpg",
  //     calories: 78,
  //     protein: "0g",
  //     fat: "0g",
  //     carbs: "21g",
  //   },
  //   {
  //     id: 653270,
  //     title: "Nori Seaweed Muffins",
  //     image: "https://spoonacular.com/recipeImages/653270-312x231.jpg",
  //     imageType: "jpg",
  //     calories: 250,
  //     protein: "4g",
  //     fat: "14g",
  //     carbs: "27g",
  //   },
  //   {
  //     id: 657095,
  //     title: "Prawn Curry",
  //     image: "https://spoonacular.com/recipeImages/657095-312x231.jpg",
  //     imageType: "jpg",
  //     calories: 458,
  //     protein: "29g",
  //     fat: "17g",
  //     carbs: "47g",
  //   },
  //   {
  //     id: 657359,
  //     title: "Pumpkin Pie Smoothie",
  //     image: "https://spoonacular.com/recipeImages/657359-312x231.jpg",
  //     imageType: "jpg",
  //     calories: 150,
  //     protein: "10g",
  //     fat: "3g",
  //     carbs: "22g",
  //   },
  //   {
  //     id: 660261,
  //     title: "Slow Cooked Applesauce",
  //     image: "https://spoonacular.com/recipeImages/660261-312x231.jpg",
  //     imageType: "jpg",
  //     calories: 62,
  //     protein: "0g",
  //     fat: "0g",
  //     carbs: "16g",
  //   },
  //   {
  //     id: 660525,
  //     title: "Soft-Baked Pretzels",
  //     image: "https://spoonacular.com/recipeImages/660525-312x231.jpg",
  //     imageType: "jpg",
  //     calories: 376,
  //     protein: "7g",
  //     fat: "22g",
  //     carbs: "41g",
  //   },
  //   {
  //     id: 663824,
  //     title: "Trinidadian Chicken Potato Curry",
  //     image: "https://spoonacular.com/recipeImages/663824-312x231.jpg",
  //     imageType: "jpg",
  //     calories: 554,
  //     protein: "35g",
  //     fat: "37g",
  //     carbs: "20g",
  //   },
  //   {
  //     id: 716195,
  //     title: "Spicy Indian-Style Hummus",
  //     image: "https://spoonacular.com/recipeImages/716195-312x231.jpg",
  //     imageType: "jpg",
  //     calories: 134,
  //     protein: "5g",
  //     fat: "6g",
  //     carbs: "15g",
  //   },
  // ];

  return (
    <Box
      maxW="md"
      minH={"100vh"}
      bg="#fff"
      // bgGradient={"linear(to-b,#fff,#fff,,#fff,green.50)"}
      fontFamily={"Rubik"}
      // p={3}
      fontSize={"sm"}
      position="relative"
    >
      <HStack width={"100%"} pt={4} justify={"space-between"} align={"stretch"}>
        {/* <WrapItem onClick={
          () => navigate(-1)
        } flex={1} p={2}>
          <BiArrowBack size={20}/>
        </WrapItem> */}
        <Heading
          fontSize={"lg"}
          alignItems={"center"}
          mx={"auto"}
          fontFamily={"Rubik"}
          fontWeight={"medium"}
        >
          Search
        </Heading>
      </HStack>
      {/* <Tabs isLazy={true} width={"100%"} isFitted={true}>
        <TabList
          gap={2}
          bg={"#E4E9F1"}
          p={1}
          display={"flex"}
          borderRadius={"xl"}
          fontWeight={"medium"}
        >
          <Tab
            _selected={{ color: "white", bg: "#0C2628" }}
            flex={1}
            fontSize={"sm"}
            fontWeight={"medium"}
            fontFamily={"Rubik"}
            borderRadius={"xl"}
          >
            Ingredients
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#0C2628" }}
            flex={1}
            fontSize={"sm"}
            fontWeight={"medium"}
            fontFamily={"Rubik"}
            borderRadius={"xl"}
          >
            Directions
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel justifyContent={"center"}>
            <Button
              isLoading={false}
              alignItems={"center"}
              fontSize={"sm"}
              fontFamily={"Rubik"}
              fontWeight={"normal"}
              color={"#0C2628"}
              colorScheme="teal"
              variant="ghost"
            >
              Load Ingredients
            </Button>
          </TabPanel>
          <TabPanel>dssd</TabPanel>
        </TabPanels>
      </Tabs> */}
      <VStack spacing={3} bg={"gray.50"} align="stretch">
        <SearchInput
          value={props.store.searchQuery}
          onChange={(event: any) => props.searchRecipe(event)}
          fetchRecipes={props.fetchRecipes}
        />
        <VStack
          px={3}
          py={2}
          pb={20}
          overflow={"scroll"}
          gap={1}
          align={"stretch"}
          minH={'100vh'}
        >
          {!props.loading && props.store.searchResults.map((recipe, index) => (
            <RecipeCardHorizontal
              id={recipe.id}
              title={recipe.title}
              imgURL={recipe.image}
              key={index}
            />
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    searchRecipe: (event: any) => dispatch(SearchRecipe(event.target.value)),
    fetchRecipes : (recipe : string) => dispatch(fetchRecipes(recipe))
  };
}

// function mapStateToProps(state : any) {
//   return {
//     searchedRecipes : state.searchResults,
//     loading : state.isLoading,
//     state : state
//   }
// }

export default connect(null, mapDispatchToProps)(SearchPage);
// function SearcRecipe(value: any): any {
//   throw new Error("Function not implemented.");
// }

// export default SearchPage

