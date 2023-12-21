import Home from './components/Home';
import Nav from './components/Navbar'
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Project from './components/Project';
import Experiences from './components/Experiences';
import Contact from './components/Contact';

function App() {
  return (
    <section>
      <Nav />
      <Home />
      <About />
      <Project />
      <Experiences/>

      <SocialLinks />

      <Contact/>
      
    </section>  
  );
}

export default App;
