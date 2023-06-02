import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

interface searchPropsIterFace {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput = ({ value, onChange }: searchPropsIterFace) => {
  // function handleSearch(event) {
  //   if (event.key === "Enter") props.fetchRecipes(value);
  //   // console.log(event.key)
  // }
  return (
    <Box position={"sticky"} zIndex={"20"} py={2} top="0" px={3} bg={"#fff"}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<FiSearch color="teal.200" />} />
        <Input
          type="filled"
          placeholder="Search recipe"
          outline={"#fff"}
          fontSize={"sm"}
          fontFamily="Rubik"
          value={value}
          onChange={onChange}
          // onKeyUp={handleSearch}
        />
        {/* <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="teal.200" />}
        /> */}
        {/* <Button
          colorScheme="teal"
          fontSize={"sm"}
          ml={"4"}
          fontWeight={"regular"}
          variant="solid"
          onClick={handleSearch}
        >
          Search
        </Button> */}
      </InputGroup>
    </Box>
  );
};
