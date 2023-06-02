import { Box, Divider, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FiClock } from "react-icons/fi";

// wrapper component
export default function TrendingRecipeTitle() {
  return (
    <Box
      bottom={3.5}
      left={2}
      right={2}
      // marginTop={250}
      marginX={"auto"}
      bgColor={"blackAlpha.200"}
      width={"90%"}
      padding={3}
      borderRadius={"md"}
      fontFamily={"sans-serif"}
      backdropFilter={"blur(10px) "}
      borderColor={"whiteAlpha.200"}
      borderWidth={1}
      position={"absolute"}
    >
      <TrendingRecipeTitle.TopSection />
      <Divider mt={2} bgColor={"whiteAlpha.200"} mb={2} />
      {/* <TrendingRecipeTitle.TopSection /> */}
      <TrendingRecipeTitle.BottomSection />
    </Box>
  );
}

/**
 * This component renders top section of TrendingRecipeTitle
 * @param props
 * @returns
 */
const TrendingRecipeTitleTop = () => {
  return (
    <>
      <Text fontSize={"large"} color={"#fff"} fontFamily={"sans-serif"} fontWeight={"bold"}>
        Make dsd
      </Text>
      <Text fontSize={"smaller"} color={"whiteAlpha.700"}>
        By sadsds{" "}
      </Text>
    </>
  );
};

/**
 *
 * @param props
 * @returns
 */
const TrendingRecipeTitleBottom = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyItems={"center"}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={"white"}
        fontSize={"15px"}
        overflow={"hidden"}
      >
        {/* Ratings */}
        <Box display={"flex"} alignItems={"center"} overflowX={"auto"}>
          <Box color={"orange.400"} mr={1}>
            <AiFillStar />
          </Box>
          <Text fontWeight={"bold"} mr={1} fontSize={"smaller"}>
            4.6
          </Text>
          <Text fontSize={"smaller"} color={"whiteAlpha.700"}>
            {"("}
            {1} reviews{")"}
          </Text>
        </Box>

        {/* time required to cook */}
        <Box flexShrink={0} display={"flex"} alignItems={"center"}>
          <Box mr={1} fontSize={"smaller"}>
            <FiClock />
          </Box>
          <Text fontSize={"smaller"}>{20} min</Text>
        </Box>

        {/* difficulty level */}
        <Box display={"flex"} alignItems={"center"}>
          <Box mr={1.5} fontSize={"smaller"}>
            <BsGraphUp />
          </Box>
          <Text fontSize={"smaller"}>Easy</Text>
        </Box>
      </Box>
    </>
  );
};

TrendingRecipeTitle.TopSection = TrendingRecipeTitleTop;
TrendingRecipeTitle.BottomSection = TrendingRecipeTitleBottom;
