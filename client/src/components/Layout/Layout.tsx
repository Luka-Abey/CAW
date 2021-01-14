import React from 'react';
import Header from '../Header/Header'; 
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Layout: React.FC = ({ children }) => (
  <>
  <Header>
    <ul className="nav-links">
      <Link to="/">
        <li className="link">HOME</li>
      </Link>
      <Link to="/submission">
        <li className="link">SUBMIT A PROJECT IDEA</li>
      </Link>
      <Link to="/projects">
        <li className="link">CURRENT PROJECTS</li>
      </Link>
    </ul>
  </Header>

  {/* <NavBar />  */}
  <main>{children}</main>
</>
);

export default Layout;
