import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  Grid,
  GridItem,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";
import Card from "./Card";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop} cursor="pointer">
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="blue"
            _hover={{ bgColor: "blue.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const TechStackTags = (props) => {
  return (
    <Flex flexWrap={"wrap"} gap={2} marginTop={props.marginTop} cursor="pointer">
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="teal"
            _hover={{ bgColor: "teal.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://i.ibb.co/DpLLm1M/shiv-00.jpg"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Projects = () => {
  return (
    <Container maxW={"7xl"} p="12" id="Projects">
      <Heading as="h1" textTransform={"capitalize"}>
        My latest project
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              target="_blank"
              href={"https://classy-druid-0cbd3c.netlify.app/"}
            >
              <Image
              className="zoom"
                borderRadius="lg"
                src={
                  "https://static.fibre2fashion.com/newsresource/images/281/farfetch_293293.jpg"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Individual", "E-Commerce"]} />
          <br />
          <TechStackTags
            tags={[
              "React",
              "Chakra-Ui",
              "Axios",
              "CSS",
              "JavaScript",
              "ES-6",
              "HTML",
            
            ]}
          />
          <Heading size={"lg"} marginTop="1">
            <Link
              textDecoration="none"
              target="_blank"
              _hover={{ textDecoration: "none" }}
            >
             FARFETCH-CLONE
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="md"
          >
            Farfetch India delivers a unique
shopping website. Discover the latest in
designer fashion for men and women.
Farfetch is individual project made in 5 days.
          </Text>
          <BlogAuthor name="Shivam Dubey" date={new Date("2022-10-12")} />
          <Stack direction={"row"} pt={5}>
            <Button
              bg={"blue.400"}
              size={"sm"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              rightIcon={<BsGithub />}
            >
              <Link
                _hover={{ textDecoration: "none" }}
                target="_blank"
                href={"https://github.com/Shivam00002/energized-secretary-1272/tree/main/modernyug"}
              >
                Github
              </Link>
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              size={"sm"}
              rounded={"full"}
              _hover={{ bg: "whiteAlpha.500" }}
              rightIcon={<BsLink45Deg />}
            >
              <Link
                _hover={{ textDecoration: "none" }}
                target="_blank"
                href={"https://thunderous-daffodil-4e1dfc.netlify.app/"}
              >
                Deployment
              </Link>
            </Button>
          </Stack>
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Some Of The Other Projects
      </Heading>
      <Divider marginTop="5" />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={"2"}
      >
        <GridItem>
          <Card
            img={"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-03/Licious_0.jpg"}
            tag={["Collaborative", "E-Commerce"]}
            tsTags={["HTML", "CSS", "JavaScript", "ES-6", "LocalStorage"]}
            heading={"Licious-CLONE"}
            content={
              "This is a clone of Licious with it's simple and eye-cathcing UI."
            }
            deploy={"https://subtle-piroshki-2fe672.netlify.app/"}
            git={"https://github.com/Shivam00002/radioactive-lip-3578"}
          />
        </GridItem>
        <GridItem>
          <Card
            img={
              "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/314800/314891.png"
            }
            tag={["Collaborative", "Cricket Score"]}
            tsTags={[
              "HTML",
              "CSS",
              "JavaScript",
              "ES-6",
              "Local storage",
            ]}
            heading={"Crick Info-Clone"}
            content={
              "Check latest Cricket series Scorecard, Report, Statistics "
            }
            deploy={"https://chipper-concha-2dfafa.netlify.app"}
            git={"https://github.com/sbj1198/alive-run-138"}
          />
        </GridItem>

        <GridItem>
          <Card
            img={
              "https://thumbs.dreamstime.com/b/online-shopping-website-laptop-screen-female-hands-typing-51465695.jpg"
            }
            tag={["Collaborative", "E-Commerce"]}
            tsTags={[
              "React",
              "CSS",
              "JavaScript",
              "Redux",
              "Chakra UI",
            ]}
            heading={"Aqua shop-Clone"}
            content={
              " This Project was a collaborative project buit by team of 5 members in 5 days. It is an E-commerce website "
            }
            deploy={"https://tranquil-granita-3b97e2.netlify.app"}
            git={"https://github.com/NarayandasGanesh/Aquashop.com/tree/main/shop"}
          />
        </GridItem>

       {/* Add More */}
       
      </Grid>
    </Container>
  );
};

export default Projects;
