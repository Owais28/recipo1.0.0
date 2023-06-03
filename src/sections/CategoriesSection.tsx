import { Box, Button, Link, Skeleton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Flexbox } from "../components/wrapper/Flexbox";

export const Categories = () => {

  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);

  return (
    <Box maxW={"md"} my={3}>
      <Text
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        fontSize="lg"
        fontFamily={"Rubik"}
        color="#0C2628"
        fontWeight={"semibold"}
        mr={3}
        pl={3}
      >
        Category{" "}
        <Link
          color="teal.500"
          fontWeight={"normal"}
          fontSize={"small"}
          href="#"
        >
          See all
        </Link>
      </Text>

      <Box width="100%">
        <Flexbox height={"auto"}>
          <Skeleton borderRadius={"full"} isLoaded={!loading}> 
          <Button
            colorScheme="teal"
            flexShrink={0}
            width={"max-content"}
            borderRadius={"full"}
            px={6}
            fontSize={"smaller"}
            fontWeight={"normal"}
          >
            Breakfast
          </Button>
          </Skeleton>
          <Skeleton borderRadius={"full"} isLoaded={!loading}> 
          <Button
            colorScheme="gray"
            flexShrink={0}
            borderRadius={"full"}
            fontSize={"smaller"}
            px={6}
            fontWeight={"normal"}
          >
            Lunch
          </Button>
          </Skeleton>

          <Skeleton borderRadius={"full"} isLoaded={!loading}> 
          <Button
            colorScheme="gray"
            flexShrink={0}
            borderRadius={"full"}
            fontSize={"smaller"}
            px={6}
            fontWeight={"normal"}
          >
            Dinner
          </Button>
          </Skeleton>

          <Skeleton borderRadius={"full"} isLoaded={!loading}> 
          <Button
            colorScheme="gray"
            flexShrink={0}
            borderRadius={"full"}
            fontSize={"smaller"}
            px={6}
            fontWeight={"normal"}
          >
            Meal
          </Button>
          </Skeleton>
          
        </Flexbox>
      </Box>
    </Box>
  );
};
