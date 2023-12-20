import Home from './components/Home';
import Nav from './components/Navbar'
import SocialLinks from './components/SocialLinks';
import About from './components/About';

function App() {
  return (
    <section>
      <Nav />
      <Home />
      <About />

      <SocialLinks />
    </section>  
  );
}

export default App;
