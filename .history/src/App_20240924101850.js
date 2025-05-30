import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";
import Techstack from "./Components/Techstack/Techstack";
import { ContactUs } from "./Components/Contact/ContactMe";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Techstack/>
      <Project/> 
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
