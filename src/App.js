import Home from './components/Home';
import Nav from './components/Navbar'
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Project from './components/Project';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <section>
      <Nav />
      <Home />
      <About />
      <Experiences />
      <Skills />
      <Project />
      <Contact />

      <SocialLinks />

      <Footer />
      
    </section>  
  );
}

export default App;
