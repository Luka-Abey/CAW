import React from 'react';
import Header from '../Header/Header'; 
import { Link } from 'react-router-dom';

const Layout: React.FC = ({ children }) => (
  <>
  <Header>
    <ul className="nav-links">
      <Link to="/">
        <li className="btn btn-link my-btn">Home</li>
      </Link>
      <Link to="/submission">
        <li className="btn btn-link my-btn">Submit An Idea</li>
      </Link>
      <Link to="/projects">
        <li className="btn btn-link my-btn">Current Projects</li>
      </Link>
    </ul>
  </Header>
  <main>{children}</main>
</>
);

export default Layout;
