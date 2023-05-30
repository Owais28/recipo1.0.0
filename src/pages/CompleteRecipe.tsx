import {
  Box,
  Button,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
// import {ArrowBackIcon} from '@c'

export const CompleteRecipe = () => {
  const location = useLocation();
  // const recipeID = location;
  console.log(location);

  const navigate = useNavigate();

  return (
    <Box
      width="100vw"
      minH={"100vh"}
      bg="#ffffff"
      // bgGradient={"linear(to-b,#fff,#fff,,#fff,green.50)"}
      fontFamily={"Rubik"}
      p={3}
      fontSize={"sm"}
      mt={2}
    >
      <Wrap
        display={"flex"}
        width={"100%"}
        mb={4}
        justify={"space-between"}
        align={"center"}
      >
        <WrapItem onClick={() => navigate(-1)} flex={1} p={2}>
          <BiArrowBack size={20} />
        </WrapItem>
        <WrapItem flex={1}>
          <Heading fontSize={"lg"} fontFamily={"Rubik"} fontWeight={"medium"}>
            Recipes
          </Heading>
        </WrapItem>
      </Wrap>
      <Tabs isLazy={true} width={"100%"} isFitted={true}>
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
          <TabPanel>{/* {location} */}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
