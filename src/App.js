import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Techstack from "./Components/Techstack/Techstack";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Techstack/>
      <Project/> 
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
