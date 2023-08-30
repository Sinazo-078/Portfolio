import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/About/about";
import Project from "./components/Project/projects";
import Contact from "./components/Contact/contact";
import Footer from"./components/Footer/footer";








function App() {
  return (
    <div className="App">
  
      <Navbar/>
      <Intro/>
      <Skills/>
      <Project />
      <Contact/>
      <Footer/>
      

     
   
      
     
    
    
      
      
    </div>
  );
}

export default App;
