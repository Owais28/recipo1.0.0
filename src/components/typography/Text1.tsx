import { Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

//
export const Text1 = ({ children }: PropsWithChildren) => {
  return (
    <Text fontSize="lg" fontFamily={"Rubik"} color="#0C2628" fontWeight={"semibold"}>
      {children}
    </Text>
  );
};
