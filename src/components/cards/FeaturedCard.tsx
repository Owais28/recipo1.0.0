import { Box, Skeleton, WrapItem, Text, Avatar } from "@chakra-ui/react";

export const FeaturedCard = (props: { loading: boolean }) => {
  return (
    <Skeleton isLoaded={!props.loading} borderRadius={"xl"}>
      <Box
        overflow={"hidden"}
        bgGradient={"linear(to-br, hsl(183.9,37.2%,59.41%), hsl(183.9,37.2%,30.41%))"}
        position={"relative"}
        //   p={4}
        borderRadius={"2xl"}
        color={"white"}
        height={"200px"}
        minW={"250px"}
        w={"250px"}
        display={"flex"}
        alignItems={"end"}
        shadow={"lg"}
      >
        {/* <Image
                src="https://unsplash.imgix.net/reserve/ujKaaIATKKx7vi5kkfQn__DSC3932.jpg?q=75&fm=jpg&auto=format&s=24fe0c29ff6e9bc2960b48be91490279"
                width={"100%"}
                height={"100%"}
                objectFit="cover"
              /> */}
        <Box
          position={"absolute"}
          p={3}
          bottom={"1"}
          // _after={{
          //   content: "",
          //   display: "block",
          //   position: "absolute",
          //   top: 0,
          //   right: 0,
          //   bottom: 0,
          //   left: 0,
          //   opacity: 0.55,
          // //   background : 'linear-gradient(45deg, darken(#13abdb,5%), #B10DC9)',
          // }}
        >
          <Text
            mb={2}
            fontSize={"sm"}
            lineHeight={"shorter"}
            width={"80%"}
            fontWeight={"bold"}
            fontFamily={"Rubik"}
          >
            Asian white noodle with extra seafood
          </Text>
          <WrapItem alignItems={"center"}>
            <Avatar size={"xs"} name="Dan Abrahmov" mr={2} src="https://bit.ly/dan-abramov" />
            <Text fontSize={"14px"} fontFamily={"Noto Sans"} color={"whiteAlpha.800"}>
              James Spader
            </Text>
          </WrapItem>
        </Box>
      </Box>
    </Skeleton>
  );
};
