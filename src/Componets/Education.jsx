import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
    List,
    ListItem,
    ListIcon,
  } from "@chakra-ui/react";
  import { MdSettings, MdCheckCircle } from "react-icons/md";
  import { Link } from "react-scroll";
  
  const Feature = ({ heading, text }) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function Education() {
    return (
      <Box as={Container} maxW="7xl" mt={14} p={4} id="Experience">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
             Education 
              </chakra.h2>
              <Button
                size="md"
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                <Link
                  activeClass="active"
                  to={"Contact"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Hire Me
                </Link>
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />Full Stack Web Devlopent Course from Masai School, Banglore (Karnatka) full time.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />BCA from Makhanlal Chaturvedi National University, Bhopal. 
                  </ListItem>
                  {/* <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Ran my own Ed-Tech for 1 year.
                  </ListItem> */}
                </List>
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "8", sm: "12", md: "16" }}
        >
          <Feature
            heading={"Coding"}
            text={
              "1200+ Hrs Coding Experience"
            }
          />
          <Feature
            heading={"DSA"}
            text={
              "100+ Hrs DSA"
            }
          />
          <Feature
            heading={"Soft Skills"}
            text={
              "100+ Hrs Soft Skills"
            }
          />
          <Feature
            heading={"Git"}
            text={
              "100+ Git Commits"
            }
          />
        </Grid>
      </Box>
    );
  }