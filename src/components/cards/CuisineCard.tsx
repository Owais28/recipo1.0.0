import { Box, Image, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  imgUrl: string;
  cuisineTitle: string;
  cuisineLink: string;
};

export const CuisineCard = ({ imgUrl, cuisineTitle }: Props) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);

  return (
    <Box
      // flex={1}
      // flexShrink={0}
      width={"16"}
      minW={16}
      height={"100%"}
      // alignItems={"center"}
      // justifyContent={"center"}
      // justifyItems={"center"}
      position={"relative"}
      mr={3}
    >
      <Box width={"75px"} mx={"auto"} height={"75px"}>
        <SkeletonCircle width={"100%"} height={"100%"} isLoaded={!loading}>
          <Image
            src={imgUrl}
            objectFit={"cover"}
            height={"100%"}
            width={"100%"}
            borderRadius={"full"}
            boxShadow={"lg"}
            mx={"auto"}
          />
        </SkeletonCircle>
      </Box>
      <SkeletonText noOfLines={2} isLoaded={!loading}>
        <Text align={"center"} mx={"auto"} fontFamily={"Rubik"} fontSize={"smaller"} mt={2}>
          {cuisineTitle}
        </Text>
      </SkeletonText>
    </Box>
  );
};
