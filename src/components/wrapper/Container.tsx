import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return (
    <Box
      w={"100vw"}
      maxW={"100vw"}
      // //   width={'sm'}
      minH={"100vh"}
      bg={"blackAlpha.900"}
      // bgGradient={"linear(to-b,#red,#fff,,#fff,green.50)"}
      // fontFamily={"Rubik"}
      overflow="hidden"
      // p={3}
    >
      {children}
    </Box>
  );
}
