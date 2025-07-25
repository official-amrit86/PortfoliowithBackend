// import { useState } from 'react';

import './App.css';
import Hero from './components/Hero';  
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Skills />   
      <Projects /> 
      <Testimonials />
      <About /> 
      <Contact />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
