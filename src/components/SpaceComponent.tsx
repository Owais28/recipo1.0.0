import { Box, Image, Text } from "@chakra-ui/react";

export const SpaceComponent = () => {
  return (
    <Box height={"20"} display={"flex"}>
      <Text
        textAlign={"center"}
        mx={"auto"}
        align={"center"}
        justifyContent={"center"}
        fontFamily={"Noto Sans"}
        fontStyle={"italic"}
        fontSize={"sm"}
        color={"#0C2628"}
      >
        Enough for today!{" "}
        <Image
          display={"inline"}
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/shortcake_1f370.png"
          w={4}
          ml={1}
        />
      </Text>
    </Box>
  );
};
