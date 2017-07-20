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
          <a className="footer-bar-links" target="_blank" href="http://www.michaelmcoates.com">Portfolio</a>
          <a className="footer-bar-links" target="_blank" href="https://www.linkedin.com/in/michaelmcoates">LinkedIn</a>
          <a className="footer-bar-links" target="_blank" href="https://github.com/michaelmcoates">GitHub</a>
          <a className="footer-bar-links" target="_blank" href="https://github.com/michaelmcoates/greenhouse">Greenhouse Repo</a>
          <a className="footer-bar-links" target="_blank" href="https://angel.co/michael-m-coates">AngelList</a>
          <a className="footer-bar-links" target="_blank" href="http://www.opusopus.co">Opus</a>
          <a className="footer-bar-links" target="_blank" href="http://www.michaelmcoates.com/KeyDown">KeyDown</a>
        </div>

        <hr/>

        <div className="right">
        </div>
      </div>
    </nav>
  );
};

export default Footer;
