import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components";
import { Skills } from "./components";
import { Experience } from "./components";
import { ContactForm } from "./components";
import { Projects } from "./components";


function App() {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
        <div className='wrapper' ref={wrapperRef}>
          <div id="smallscreen-message">
            THIS WEBSITE IS NOT OPTIMIZED FOR MOBILE, PLEASE OPEN IT ON YOUR COMPUTER!
          </div>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="skills" className='z-10'>
            <Skills />
          </div>

          <div id="experience" className='relative z-30 bg-primary'>
            <Experience />
          </div>

          <div id="Projects" className='relative z-30 bg-primary'>
            <Projects />
          </div>

          <div id="contact" className='relative z-30 bg-primary'>
            <ContactForm />
          </div>

      </div>
    </BrowserRouter>
  );
}

export default App
