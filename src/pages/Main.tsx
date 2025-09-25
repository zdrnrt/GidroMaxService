// import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Advantages from '../components/Advantages';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Main:React.FC = () => {
/*
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
*/
  return(
    <>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Advantages />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

export default Main;