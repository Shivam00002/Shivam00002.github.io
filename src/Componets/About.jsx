import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Link,
    Text,
    useBreakpointValue,
    useColorMode,
  } from "@chakra-ui/react";
  import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
  import Typed from "react-typed";
  import {IconButton} from '@chakra-ui/button';
  import {FaDownload} from 'react-icons/fa';
  import "./Navbar.css";
   import Res from "./Res";
import Restwo from "./Restwo";
  export default function About() {

    const handleResume = () => {
      // fetch("Shivam_Dubey_Resume.pdf").then((res) => {
      //   res.blob().then((blob) => {
      //     const fileUrl = window.URL.createObjectURL(blob);
      //   //   create an object for the file.
      //     let file = document.createElement("a");

    
      //     file.href = fileUrl;
      //     file.download = "Shivam_Dubey_Resume.pdf";
      //     file.click();
      //   });
      // });
  
     };
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        pt={10}
        id="About"
      >
        <Flex  p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"xl"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
              className="typeshivam"
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Hi, I Am
              </Text>
              <br />
              <Text  className="typeshivam" p={3} width='80%' color={"blue.400"} as={"span"}>
                <Typed
                  strings={[
                    "Shivam Dubey",
                    "A Full-Stack Developer",
                   
                  ]}
                  typeSpeed={95}
                  backSpeed={90}
                  loop
                ></Typed>
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              A passionate full-stack web developer, who loves to build cool
              projects and work in a team. I want to achieve global recognition
              and exposure with my skillset, toolset, and mindset.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.600",
                }}
                onClick={handleResume}

           
              >
                <Link
                   style={{ textDecoration: "none" }}
                 
                  // href="https://drive.google.com/drive/folders/1-TBHBQjmB1ygTTIPgF7I3PNFT8g0qtxX?usp=sharing"
                  // target={"_blank"}
                >

 
                                          <Restwo />

           

                </Link>
              </Button>
              <Button rounded={"full"}>
                <Link
                  style={{ textDecoration: "none" }}
                  target={"_blank"}
                  href="https://github.com/Shivam00002?tab=repositories"
                  
                >
                  My Projects
                </Link>
              </Button>
            </Stack>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button>
                <Link
                  href="https://www.linkedin.com/in/shivam-dubey-6127b4236/"
                  target={"_blank"}
                >
                  <BsLinkedin />
                </Link>
              </Button>
              <Button>
                <Link href="https://twitter.com/_Shivam_Dubey_" target={"_blank"}>
                  <BsTwitter />
                </Link>
              </Button>
              <Button>
                <Link href="https://github.com/Shivam00002" target={"_blank"}>
                  <BsGithub />
                </Link>
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} alignItems="center" justifyContent={"center"}>
          {colorMode == "dark" ? (
            <Image
              objectFit={"cover"}
              className="profileimg"
              width={["xs", "lg"]}
              height={["xs", "lg"]}
              src={
                "https://ca.slack-edge.com/T04R62JBWR2-U04RBS5V4F7-bd2cdd5c152d-512"
              }
            />
          ) : (
            <Image
              alt={"Login Image"}
              className="profileimg"
              objectFit={"cover"}
              width={["xs", "lg"]}
              height={["xs", "lg"]}
              borderRadius="10px"
              src={
                "https://ca.slack-edge.com/T04R62JBWR2-U04RBS5V4F7-bd2cdd5c152d-512"
              }
            />
          )}
        </Flex>
      </Stack>
    );
  }