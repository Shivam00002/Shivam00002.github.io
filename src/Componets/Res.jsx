import React from 'react'
import Shivam_Dubey_Resume from "../assets/Shivam_Dubey_Resume.pdf";
import {IconButton} from '@chakra-ui/button';
import {FaDownload} from 'react-icons/fa';

const Res = () => {
  return (
  <>
  <div>

  {/* <IconButton href={Shivam} backgroundColor={"blue.400"}   color={"white.800"} mr={4} icon={<FaDownload />} isRound="true">   </IconButton>
   */}
  <a href={Shivam_Dubey_Resume}  download className="btn">
         Resume 
      </a>

  </div>
  </>

  )
}

export default Res