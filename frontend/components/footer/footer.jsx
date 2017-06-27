import React from 'react';
import { Link, hashHistory } from 'react-router';

const Footer = () => {
  return (
    <nav className="footer-bar">
      <div className="left">
        <a className="my-links" href="https://www.linkedin.com/in/michaelmcoates">My LinkedIn</a>
        <a className="my-links" href="https://github.com/michaelmcoates/greenhouse">GitHub Repo</a>
      </div>

      <div className="right">
      </div>
    </nav>
  );
};

export default Footer;
