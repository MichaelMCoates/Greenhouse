import React from 'react';
import { Link, hashHistory } from 'react-router';

const Footer = () => {
  return (
    <nav className="footer-bar-container">
      <div className="footer-bar">
        <div className="footer-bar-left">
          <h2 className="footer-bar-header">
            ABOUT MICHAEL COATES
          </h2>
          <a className="footer-bar-links" href="https://www.linkedin.com/in/michaelmcoates">My LinkedIn</a>
          <a className="footer-bar-links" href="https://github.com/michaelmcoates/greenhouse">GitHub Repo</a>
        </div>

        <hr/>

        <div className="right">
        </div>
      </div>
    </nav>
  );
};

export default Footer;
