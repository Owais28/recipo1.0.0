import { Box, Button, Icon, Skeleton, styled } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TrendingRecipeTitle from "./TrendingRecipeTitle";
import { BiBookmark } from "react-icons/bi";

export type Props = {
  title: string;
  chef: {
    name: string;
    verified: boolean;
  };
  timeRequired: number;
  reviews: number;
  reviewsOnScale: number;
  imgUrl: string;
};

const StyledCardContainer = styled(Box, {
  baseStyle: {
    backgroundColor: "black",
    padding: 3,
    backdropBlur: "1px",
    position: "relative",
    borderRadius: 10,
    minHeight: 400,
    overflow: "hidden",
    width: "350px",
  },
});

const StyledSaveButton = () => {
  return (
    <Box
      position={"absolute"}
      backdropFilter={"blur(10px) "}
      top={3}
      right={3}
      borderRadius={"full"}
      width={50}
      height={50}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      borderColor={"whiteAlpha.200"}
      borderWidth={1}
      bgColor={"blackAlpha.200"}
    >
      {/* <Skeleton> */}
      <Button colorScheme="none">
        <Icon>
          <BiBookmark size={25} />
        </Icon>
      </Button>
      {/* </Skeleton> */}
    </Box>
  );
};

export default function TrendingRecipeCard() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);

  return (
    <StyledCardContainer
      // bgGradient={"linear(blackAlpha.100, whiteAlpha.300)"}
      bgImage={
        'url("https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")'
      }
      bgPosition={"center"}
      bgSize={"cover"}
      borderRadius={"lg"}
      // backdropFilter={"hue-rotate(30deg)"}
      bgColor={"blackAlpha.500"}
      // bgBlendMode={"multiply"}
      flexShrink={0}
    >
      {/* <Image src="https://images.unsplash.com/photo-1576094145185-26affdd581a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" /> */}
      <Skeleton isLoaded={isLoading} height={"full"}>
        <StyledSaveButton />
        <TrendingRecipeTitle
        // chef={{ name: "", verified: true }}
        // imgUrl=""
        // reviews={10}
        // reviewsOnScale={10}
        // timeRequired={10}
        // title=""
        />
      </Skeleton>
    </StyledCardContainer>
  );
}
