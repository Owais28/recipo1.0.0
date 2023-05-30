import { Text } from "@chakra-ui/react";

// 
export const Text1 = ({ children }) => {
  return (
    <Text
      fontSize="lg"
      fontFamily={"Rubik"}
      color="#0C2628"
      fontWeight={"semibold"}
    >
      {children}
    </Text>
  );
};
