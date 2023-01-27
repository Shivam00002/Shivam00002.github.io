
import './App.css'; 
import Navbar from './Componets/Navbar';
import About from './Componets/About';
import GitCalendar from './Componets/GitCalendar';
import Contact from './Componets/Contact';
import Skills from './Componets/Skills';
import Projects from './Componets/Projects';
import Education from './Componets/Education';
import Footer from './Componets/Footer';
//import GithubCal from './Componets/GitCalendar';

function App() {

  return (
    <>
    <Navbar/>
    <About/>
   
    <Skills/>
    <Education/>
    <Projects/>
    {/* <GithubCal/> */}
    <GitCalendar/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
