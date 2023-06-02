import {
  Avatar,
  Box,
  Grid,
  Text,
  Wrap,
  WrapItem,
  Image,
  SkeletonText,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { useState } from "react";

export const Navbar = ({ person = "Stranger" }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);

  return (
    <Box maxW={"100%"} p={3}>
      <Wrap justify={"space-between"} py={"2"} mb={3} align={"center"}>
        <WrapItem flex={1}>
          <SkeletonText noOfLines={2} isLoaded={!loading}>
            <Grid gap={"0px"}>
              <Text fontFamily={"Rubik"} fontSize={"larger"} color={"#0C2628"} fontWeight={"Bold"}>
                Hello {person}{" "}
                <Image
                  display={"inline"}
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/waving-hand_1f44b.png"
                  w={5}
                  h={5}
                />
              </Text>
              <Box>
                <Box mt={"-1"}>
                  <Text
                    fontSize={"smaller"}
                    color={"gray.500"}
                    fontWeight={"normal"}
                    fontFamily={"Rubik"}
                  >
                    What to cook today?
                  </Text>
                </Box>
              </Box>
            </Grid>
          </SkeletonText>
        </WrapItem>
        <WrapItem>
          {/* <SkeletonCircle isLoaded={!loading} /> */}
          <Popover isLazy={true}>
            <PopoverTrigger>
              <Avatar size={"md"} name="Dan Abrahmov" mr={2} src="https://bit.ly/dan-abramov" />
            </PopoverTrigger>
            <PopoverContent outline={"none"}>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation</PopoverHeader>
              <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
          </Popover>
          {/* <Avatar
            size={"md"}
            name="Dan Abrahmov"
            mr={2}
            src="https://bit.ly/dan-abramov"
          /> */}
          {/* </SkeletonCircle> */}
        </WrapItem>
      </Wrap>
    </Box>
  );
};
