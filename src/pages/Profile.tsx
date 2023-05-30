import { Box, Heading, HStack } from '@chakra-ui/react'
import React from 'react'

export const Profile = () => {
    document.title = "Recipo | Profile"
  return (
    <Box
    maxW={"md"}
      minH={"100vh"}
      bg="#ffffff"
      // bgGradient={"linear(to-b,#fff,#fff,,#fff,green.50)"}
      fontFamily={"Rubik"}
      p={3}
      fontSize={"sm"}
    >
      <HStack width={"100%"} mb={4} justify={"space-between"} align={"stretch"}>
        {/* <WrapItem onClick={
          () => navigate(-1)
        } flex={1} p={2}>
          <BiArrowBack size={20}/>
        </WrapItem> */}
        <Heading
          fontSize={"lg"}
          alignItems={"center"}
          mx={"auto"}
          fontFamily={"Rubik"}
          fontWeight={"medium"}
        >
          Profile
        </Heading>
      </HStack>
      {/* <Tabs isLazy={true} width={"100%"} isFitted={true}>
        <TabList
          gap={2}
          bg={"#E4E9F1"}
          p={1}
          display={"flex"}
          borderRadius={"xl"}
          fontWeight={"medium"}
        >
          <Tab
            _selected={{ color: "white", bg: "#0C2628" }}
            flex={1}
            fontSize={"sm"}
            fontWeight={"medium"}
            fontFamily={"Rubik"}
            borderRadius={"xl"}
          >
            Ingredients
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#0C2628" }}
            flex={1}
            fontSize={"sm"}
            fontWeight={"medium"}
            fontFamily={"Rubik"}
            borderRadius={"xl"}
          >
            Directions
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel justifyContent={"center"}>
            <Button
              isLoading={false}
              alignItems={"center"}
              fontSize={"sm"}
              fontFamily={"Rubik"}
              fontWeight={"normal"}
              color={"#0C2628"}
              colorScheme="teal"
              variant="ghost"
            >
              Load Ingredients
            </Button>
          </TabPanel>
          <TabPanel>dssd</TabPanel>
        </TabPanels>
      </Tabs> */}
    </Box>
  )
}
