import React from 'react';

const Header: React.FC = ({ children }) => (
  <header className="masthead mb-auto">
    <div className="inner custom-header">
      <h3 className="masthead-brand">C.A.W</h3>
      <nav className="nav nav-masthead justify-content-center">
        <a className="nav-link active" href="#">Home</a>
        <a className="nav-link" href="/submission">Current Submissions</a>
        <a className="nav-link" href="#">Submit A Project Idea</a>
      </nav>
    </div>
  </header>
);

export default Header;
