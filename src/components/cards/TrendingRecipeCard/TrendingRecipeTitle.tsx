import { Box, Divider, Text } from "@chakra-ui/react";
import { FC } from "react";
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
      bgColor={"blackAlpha.300"}
      width={"90%"}
      padding={3}
      borderRadius={"md"}
      fontFamily={"sans-serif"}
      backdropFilter={"blur(10px) "}
      borderColor={"whiteAlpha.200"}
      borderWidth={1}
      position={"absolute"}
    >
      <TrendingRecipeTitle.TopSection title="lorem sdsd fsdfs df,snmdfsdf sfd fsd sdf " />
      <Divider mt={2} bgColor={"whiteAlpha.200"} mb={2} />
      {/* <TrendingRecipeTitle.TopSection /> */}
      <TrendingRecipeTitle.BottomSection />
    </Box>
  );
}

type TitleTopProps = {
  title: string;
  author?: string;
};

/**
 * This component renders top section of TrendingRecipeTitle
 * @param title title of the recipe
 * @param author author of the recipe
 * @returns
 */
const TrendingRecipeTitleTop: FC<TitleTopProps> = ({ title }) => {
  return (
    <>
      <Text fontSize={"small"} color={"#fff"} fontFamily={"sans-serif"} fontWeight={"bold"}>
        {title?.length >= 20 ? title?.slice(0, 20) + "..." : title}
      </Text>
      <Text fontSize={13} color={"whiteAlpha.700"}>
        By Owais Athar{" "}
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
