'use client';
import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Set the current year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }

    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Optional cleanup (remove listeners on unmount)
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', () => { });
      });
    };
  }, []);

 


  return (
    <div>
           <Navbar />


      {/* <!-- Hero Section --> */}
<Hero/>     

      {/* <!-- About Section --> */}
      <About/>

      {/* <!-- Experience Section --> */}
      
<Experience/>
      {/* <!-- Projects Section --> */}
      <Projects/>

      {/* <!-- Skills Section --> */}
      <Skills/>

      {/* <!-- Contact Section --> */}
      <Contact/>

      {/* <!-- Footer --> */}
      <Footer/>
    </div>
  );
}
