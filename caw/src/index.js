import React from 'react';
import './App.css';
import Navbar from './NavBar.js'
import About from './About.js'
import Logo from './logo.jpg'
import ReactDOM from 'react-dom';
import FadeInSection from './Fades.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header" id="main">
          <img src={Logo} className="App-header" style={{width: "80%", height: "60%"}} />
      </header>
      <FadeInSection>
      <About></About>
      </FadeInSection>
      <FadeInSection>
      <div className="App-body">
          <p>
            and more
          </p>
      </div>
      </FadeInSection>
    </div>

  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


