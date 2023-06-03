import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { HiHome } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

// Main Menu Component
export const MainMenu = () => {
  return (
    <Box
      // position={""}
      top={"50vh"}
      left={0}
      bg={"white"}
      boxShadow={"xs"}
      maxWidth={"md"}
      // width={[0, "max-content"]}
      zIndex={100}
      opacity={[0, 0, 1]}
      overflow={"hidden"}
      display={["none", "none", "block"]}
    >
      <VStack align={"center"} alignItems={"center"} justify={"center"} gap={0}>
        <Text fontFamily={"Rubik"} fontSize={"xl"}>
          Recipo
        </Text>
        <Box flex={1}>
          <NavLink className="main__menu-link" to={"/"}>
            <Button
              colorScheme="teal"
              width={"100%"}
              px={4}
              py={5}
              _selected={{
                color: "black",
              }}
              variant="ghost"
              borderRadius={0}
              // boxShadow={'xl'}
            >
              <VStack spacing={0}>
                <HiHome fontSize={20} />
                <Text fontSize={11} fontFamily={"Rubik"} fontWeight="normal" color={"#0C2628"}>
                  Home
                </Text>
              </VStack>
            </Button>
          </NavLink>
        </Box>

        <Box flex={1}>
          <NavLink className="main__menu-link" to={"/search"}>
            <Button
              colorScheme="gray"
              width={"100%"}
              px={4}
              py={5}
              _selected={{
                color: "black",
              }}
              variant="ghost"
              borderRadius={0}
            >
              <VStack spacing={0}>
                <FiSearch fontSize={20} />
                <Text fontSize={11} fontFamily={"Rubik"} fontWeight="normal">
                  Search
                </Text>
              </VStack>
            </Button>
          </NavLink>
        </Box>

        <Box flex={1}>
          <NavLink className="main__menu-link" to={"/notification"}>
            <Button
              colorScheme="gray"
              width={"100%"}
              px={4}
              py={5}
              _selected={{
                color: "black",
              }}
              variant="ghost"
              borderRadius={0}
            >
              <VStack spacing={0}>
                <IoIosNotificationsOutline fontSize={20} />
                <Text fontSize={11} fontFamily={"Rubik"} fontWeight={"normal"}>
                  Notification
                </Text>
              </VStack>
            </Button>
          </NavLink>
        </Box>

        <Box flex={1}>
          <NavLink className="main__menu-link" to={"/user"}>
            <Button
              colorScheme="gray"
              width={"100%"}
              px={4}
              py={5}
              _selected={{
                color: "black",
              }}
              variant="ghost"
              borderRadius={0}
            >
              <VStack spacing={0}>
                <BsPersonFill fontSize={20} />
                <Text fontSize={11} fontFamily={"Rubik"} fontWeight={"normal"}>
                  Profile
                </Text>
              </VStack>
            </Button>
          </NavLink>
        </Box>
      </VStack>
    </Box>
  );
};
