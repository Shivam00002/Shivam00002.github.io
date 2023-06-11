import React from 'react'
import Shivam_Dubey_Resume from "../assets/Shivam_Dubey_Resume.pdf";
import {IconButton} from '@chakra-ui/button';
import {FaDownload} from 'react-icons/fa';
import styles from "./Style.module.css";
const Restwo = () => {



  const handleNavigate=()=>{
  
    window.location.href='https://drive.google.com/file/d/1BUuSRcrc25LMhaJbMnHJkZWzTXdpCChq/view?usp=sharing'
  }



  return (
  <>
  <div>

  {/* <IconButton href={Shivam} backgroundColor={"blue.400"}   color={"white.800"} mr={4} icon={<FaDownload />} isRound="true">   </IconButton>
   */}
  <button onClick={handleNavigate} className="btn">
    <a href={Shivam_Dubey_Resume} download="Fw19_0863_Shivam_Dubey_Resume">Resume </a>
         
      </button>

  </div>
  </>

  )
}

export default Restwo