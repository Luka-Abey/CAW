import React from 'react';

const Header: React.FC = ({ children }) => (
  <header className="main-header" >
    <nav className="navbar">{children}</nav>
  </header>
);

export default Header;
