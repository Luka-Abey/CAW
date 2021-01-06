import React from 'react';
import './App.css';
import Navbar from './components/NavBar.js'
import About from './components/About.js'
import Logo from './media/logo.jpg'
import ReactDOM from 'react-dom';
import FadeInSection from './effects/Fades.js';
// import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header" id="main">
          {/* <img src={Logo} className="banner"/> */}
      </header>
      <FadeInSection>
        <About></About>
      </FadeInSection>
    </div>

  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


