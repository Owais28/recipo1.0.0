import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { IoIosNutrition } from "react-icons/io";
import { IoMdPizza } from "react-icons/io";
import CheckCircleIcon from "@chakra-ui/icon";
import { TiLeaf } from "react-icons/ti";
import { BsArrowRightShort } from "react-icons/bs";
// import { Link, Route, Routes } from "react-router-dom";
// import { CompleteRecipe } from "../../routes/completeRecipe";

interface RecipeInfoInterface {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  title: string;
  imgURL: string;
  calories: number;
  protein: string;
  fat: string;
  carbs: string;
}
export const RecipeInfo: FC<RecipeInfoInterface> = (props) => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [loading, setLoading] = useState(true);

  //   setTimeout(() => setLoading(false), 3000);

  return (
    <Drawer
      closeOnEsc={true}
      placement={"bottom"}
      data-id={props.id}
      id={props.id.toString()}
      onClose={props.onClose}
      isOpen={props.isOpen}
      trapFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent borderTopRadius={"2xl"}>
        <DrawerHeader
          borderBottomWidth="1px"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          Recipe Info
          <Box>
            <CheckCircleIcon w={3} />
          </Box>
        </DrawerHeader>
        <DrawerBody>
          <Box gap={2} alignItems={"center"}>
            <Box alignItems={"center"} w={"100%"} display={"flex"} justifyContent={"space-between"}>
              <Box pr={3} py={"4"}>
                <Text
                  fontSize={"large"}
                  fontWeight={"bold"}
                  fontFamily={"Noto Sans"}
                  color={"#0C2628"}
                >
                  {props.title}
                </Text>
              </Box>

              <Box
                fontSize={"small"}
                display={"flex"}
                alignItems={"center"}
                fontWeight={"normal"}
                color={"grey"}
              >
                <Box mr={1}>
                  <BsClock fontSize={"small"} color={"grey"} />
                </Box>
                <Text fontFamily={"Rubik"}>15min</Text>
              </Box>
            </Box>

            <Grid
              templateColumns={"repeat(2,1fr)"}
              alignItems={"center"}
              justifyContent={"center"}
              columnGap={6}
              rowGap={3}
              mb={5}
            >
              <GridItem display={"flex"} alignItems={"center"}>
                <Box
                  color={"#0C2628"}
                  mr={3}
                  p={2}
                  borderRadius={"lg"}
                  bg={"#E4E9F1"}
                  transition={"all"}
                >
                  <TiLeaf fontSize={"sm"} size={20} />
                </Box>
                <Text
                  //   color={""}
                  alignItems={"center"}
                  fontSize={"sm"}
                  fontFamily={"Rubik"}
                  fontWeight={"normal"}
                  color={"#0C2628"}
                >
                  {`
              ${props.carbs}`}{" "}
                  carbs
                </Text>
              </GridItem>
              <GridItem display={"flex"} alignItems={"center"}>
                <Box
                  color={"#0C2628"}
                  mr={3}
                  p={2}
                  borderRadius={"lg"}
                  bg={"#E4E9F1"}
                  transition={"all"}
                >
                  <IoIosNutrition fontSize={"sm"} size={20} />
                </Box>
                <Text
                  //   color={"grey"}
                  alignItems={"center"}
                  fontSize={"sm"}
                  fontFamily={"Rubik"}
                  fontWeight={"normal"}
                  color={"#0C2628"}
                >
                  {`
              ${props.protein}`}{" "}
                  proteins
                </Text>
              </GridItem>
              <GridItem display={"flex"} alignItems={"center"}>
                <Box
                  color={"#0C2628"}
                  mr={3}
                  p={2}
                  borderRadius={"lg"}
                  bg={"#E4E9F1"}
                  transition={"all"}
                >
                  <AiOutlineFire fontSize={"sm"} size={20} />
                </Box>
                <Text
                  //   color={"grey"}
                  alignItems={"center"}
                  fontSize={"sm"}
                  fontFamily={"Rubik"}
                  fontWeight={"normal"}
                  color={"#0C2628"}
                >
                  {`
              ${props.calories}`}{" "}
                  calories
                </Text>
              </GridItem>
              <GridItem display={"flex"} alignItems={"center"}>
                <Box
                  color={"#0C2628"}
                  mr={3}
                  p={2}
                  borderRadius={"lg"}
                  bg={"#E4E9F1"}
                  transition={"all"}
                >
                  <IoMdPizza fontSize={"sm"} size={20} />
                </Box>
                <Text
                  //   color={"grey"}
                  alignItems={"center"}
                  fontSize={"sm"}
                  fontFamily={"Rubik"}
                  fontWeight={"normal"}
                  color={"#0C2628"}
                >
                  {`
              ${props.fat}`}{" "}
                  fats
                </Text>
              </GridItem>
            </Grid>

            {/* <Box padding="6" boxShadow="xl" bg="white" w={"100%"}> */}
            {/* <SkeletonCircle size="10" isLoaded={!loading}>
                  
                </SkeletonCircle> */}
            {/* <SkeletonText
                mt="4"
                noOfLines={3}
                spacing="4"
                isLoaded={!loading}
              /> */}
            {/* </Box> */}
            {/* Ingredients Section */}
            <Button
              variant={"solid"}
              width={"100%"}
              colorScheme={"teal"}
              fontFamily={"Rubik"}
              fontWeight={"normal"}
              mb={3}
            >
              Complete Recipe{" "}
              <Box ml={1}>
                <BsArrowRightShort fontSize={25} />
              </Box>
            </Button>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
