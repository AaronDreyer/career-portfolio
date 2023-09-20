import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
// import Modals from './components/Modals';
// import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
