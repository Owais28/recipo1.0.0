// import { Flexbox } from "../../components/wrapper/Flexbox";
import TrendingRecipeCard from "../../components/cards/TrendingRecipeCard/TrendingRecipeCard";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

// type Props = {};

export default function TrendingSection() {
  return (
    <Box py={2}>
      <Box
        px={3}
        fontFamily={"Rubik"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={"100%"}
      >
        <Text fontWeight={600} color={"white"} fontSize={"medium"}>
          Trending Recipes
        </Text>
        <Link color={"teal.600"} fontSize={"small"}>
          See all
        </Link>
      </Box>
      <Flex height={"max-content"} pl={3} pr={2} pt={2} pb={2} gap={3} overflow={"auto"}>
        {[...new Array(20)].map((_item, key) => (
          <TrendingRecipeCard
            key={key}
            // chef={{ name: "Owais Athar", verified: true }}
            // imgUrl="sffds"
            // reviews={10}
            // reviewsOnScale={4.5}
            // title="Make dssd ds"
            // timeRequired={100}
          />
        ))}
      </Flex>
    </Box>
  );
}
