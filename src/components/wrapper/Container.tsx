import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <Box>{children}</Box>;
}
