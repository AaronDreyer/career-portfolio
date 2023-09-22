import './index.css';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {



  const mainBackgroundColor = {
    backgroundColor: '#FFFFFF',
    fontFamily: 'Montserrat, sans-serif',
  };

  return (
    <div className="App" style={mainBackgroundColor}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

