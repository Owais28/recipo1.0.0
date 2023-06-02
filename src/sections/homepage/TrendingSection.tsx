import { Flexbox } from "../../components/wrapper/Flexbox";
import TrendingRecipeCard from "../../components/cards/TrendingRecipeCard/TrendingRecipeCard";
import { Box, Link, Text } from "@chakra-ui/react";

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
      >
        <Text fontWeight={600} fontSize={"medium"}>
          Trending Section
        </Text>
        <Link color={"teal.600"} fontSize={"small"}>
          See all
        </Link>
      </Box>
      <Flexbox height={"max-content"}>
        {[...new Array(50)].map((_item, key) => (
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
      </Flexbox>
    </Box>
  );
}
