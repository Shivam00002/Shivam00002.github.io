import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitCalendar = () => {
  return (
    <div>
      <Heading
        size={"2xl"}
        textAlign={"center"}
        textTransform={"capitalize"}
        ml={10}
      >
        days i've code
      </Heading>
      <Center mt={10} mb={10}>
        <GitHubCalendar username="Shivam00002" />

      </Center>
      <p  align="center"><img src="https://github-readme-stats.vercel.app/api?username=shivam00002&show_icons=true&locale=en" alt="shivam00002" /></p>
     

<p style={{"margin-top" : "25px"}} align="center"><img src="https://github-readme-streak-stats.herokuapp.com/?user=Shivam00002&" alt="Shivam00002" /></p>
    </div>
  );
};

export default GitCalendar;


// import React from "react";
// import GitHubCalendar from "react-github-calendar";



// const GithubCal = () => {
  
  
//   return (
//     <div  style={{background:"rgb(33,33,33)",color:"rgb(84,95,196)",marginTop:"-20px"}}>
//     <div>
//     <h1 className="projects--header" >GitHub Stats</h1>
//     </div>
//       <GitHubCalendar username="Shivam00002" style={{margin:"auto"}}/>

     



//     </div>
//   );
// };

// export default GithubCal;