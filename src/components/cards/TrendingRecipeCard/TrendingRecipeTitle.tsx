import { Box, Divider, Text } from "@chakra-ui/react";

// wrapper component
export default function TrendingRecipeTitle() {
  return (
    <Box
      bottom={0}
      left={0}
      marginTop={250}
      marginX={"auto"}
      bgColor={"blackAlpha.200"}
      width={"99%"}
      padding={3}
      borderRadius={"md"}
      fontFamily={"sans-serif"}
      backdropFilter={"blur(10px) "}
      borderColor={"whiteAlpha.200"}
      borderWidth={1}
    >
      <TrendingRecipeTitle.TopSection />
      <Divider mt={2} bgColor={"gray.900"} mb={2} />
      <TrendingRecipeTitle.TopSection />
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
  return <></>;
};

TrendingRecipeTitle.TopSection = TrendingRecipeTitleTop;
TrendingRecipeTitle.BottomSection = TrendingRecipeTitleBottom;
