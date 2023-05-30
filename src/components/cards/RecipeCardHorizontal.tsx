import {
  Box,
  Stack,
  VStack,
  Image,
  Text,
  Avatar,
  WrapItem,
  Link,
  Skeleton,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";

interface RecipesCardInterface {
  id: Number;
  title: string;
  imgURL: string;
}

export const RecipeCardHorizontal: FC<RecipesCardInterface> = ({
  id,
  title,
  imgURL,
}) => {
  const [loading, setLoading] = useState(true);

  //
  setTimeout(() => setLoading(false), 3000);

  return (
    <Skeleton isLoaded={!loading} borderRadius={"xl"}>
      <Box
        p={2}
        borderRadius={"xl"}
        overflow={"hidden"}
        w={"100%"}
        minWidth={"98%"}
        //   maxW={}
        height={"122px"}
        // boxShadow={"md"}
        border={"1px"}
        borderColor={"gray.200"}
        bg={"white"}
        data-recipe-id={id}
      >
        <Stack direction={"row"} height={"100%"} justify={"space-between"}>
          <Box display={"flex"}>
            {/* <Skeleton isLoaded/> */}
            <Image
              borderRadius={"lg"}
              src={imgURL}
              minWidth={"100px"}
              width={"100px"}
              height={"100%"}
              objectFit={"cover"}
              boxShadow={"md"}
              overflow={"hidden"}
              //   flex={1}
              mr={2}
            />
            {/* </Skeleton> */}
            <VStack
              textAlign={"left"}
              p={1}
              align={"start"}
              justify={"space-between"}
              pr={2}
            >
              <Text
                fontSize={"sm"}
                fontWeight={"bold"}
                fontFamily={"Noto Sans"}
                color={"#0C2628"}
                maxH={"53px"}
                overflow={"hidden"}
              >
                {title.length < 27 ? title : title.slice(0, 27) + "..."}
              </Text>
              <WrapItem alignItems={"center"}>
                <Avatar
                  size={"xs"}
                  name="Dan Abrahmov"
                  mr={2}
                  src="https://bit.ly/dan-abramov"
                />
                <Text
                  fontSize={"14px"}
                  fontFamily={"Noto Sans"}
                  color={"gray.400"}
                >
                  James Spader
                </Text>
              </WrapItem>
            </VStack>
          </Box>
          <Box display={"grid"} justifyContent={"center"} alignItems={"center"}>
            {/* <Button bg={'#0C2628'} _selected={{'color' : 'black',}} w p={0} borderRadius={'lg'}> */}
            <RouterLink
              to="/completeRecipe"
              state={{
                data: {
                  recipeID: id,
                },
              }}
            >
              {/* <Box bg={"#0C2628"} borderRadius='lg' p={0.5} boxShadow={"base"}>
                <Link
                  color="teal.500"
                  bg={"teal.50"}
                  fontWeight={"normal"}
                  fontSize={"small"}
                  href="#"
                >
                  <BsArrowRightShort color="white" fontSize={"30px"} />
                </Link>
              </Box> */}
            </RouterLink>
            {/* </Button> */}
          </Box>
        </Stack>
      </Box>
    </Skeleton>
  );
};
