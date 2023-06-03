import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = {
  height: number | string;
};

export const Flexbox = ({ children, height, ...props }: PropsWithChildren<Props>) => {
  return (
    <Flex
      py={2}
      gap={3}
      pl={3}
      pr={3}
      css={{
        "&::-webkit-scrollbar": {
          width: "1px",
          height: "0px",
        },
        "&::-webkit-scrollbar-track": {
          width: "2px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#8ccef0",
          borderRadius: "24px",
        },
      }}
      overflowX={"scroll"}
      wrap={"nowrap"}
      height={`${height}`}
      {...props}
    >
      {children}
    </Flex>
  );
};
