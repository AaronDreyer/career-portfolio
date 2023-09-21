import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {



  const mainBackgroundColor = {
    backgroundColor: '#FFFFFF',
  };

  return (
    <div className="App" style={mainBackgroundColor}>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

