import React from 'react';
import Header from '../Header/Header'; 
import { Link } from 'react-router-dom';

const Layout: React.FC = ({ children }) => (
  <>
  <Header>
    <ul className="nav-links-caw">
      <Link to="/">
        <li className="link-caw">HOME</li>
      </Link>
      <Link to="/submission">
        <li className="link-caw">SUBMIT A PROJECT IDEA</li>
      </Link>
      <Link to="/projects">
        <li className="link-caw">CURRENT PROJECTS</li>
      </Link>
    </ul>
  </Header>

  <main>{children}</main>
</>
);

export default Layout;
