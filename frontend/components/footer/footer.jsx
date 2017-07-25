import React from 'react';
import { Link, browserHistory } from 'react-router';

const Footer = () => {
  return (
    <nav className="footer-bar-container">
      <div className="footer-bar">
        <div className="footer-bar-row">
          <div className="footer-bar-row-col">
            <h2 className="footer-bar-header">
              ABOUT MICHAEL COATES
            </h2>
            <a className="footer-bar-links" target="_blank" href="http://www.michaelmcoates.com">Portfolio</a>
            <a className="footer-bar-links" target="_blank" href="https://www.linkedin.com/in/michaelmcoates">LinkedIn</a>
            <a className="footer-bar-links" target="_blank" href="https://github.com/michaelmcoates">GitHub</a>
            <a className="footer-bar-links" target="_blank" href="https://angel.co/michael-m-coates">AngelList</a>
          </div>
          <div className="footer-bar-row-col">
            <h2 className="footer-bar-header">
              PROJECTS
            </h2>
            <a className="footer-bar-links" target="_blank" href="https://github.com/michaelmcoates/greenhouse">Greenhouse Repo</a>
            <a className="footer-bar-links" target="_blank" href="http://www.opusopus.co">Opus</a>
            <a className="footer-bar-links" target="_blank" href="http://www.michaelmcoates.com/KeyDown">KeyDown</a>
          </div>
        </div>

        <hr className="footer-hr"/>

        <div className="footer-under-hr">
          <div className="footer-under-hr-left">
            <div>
              Terms of Use
            </div>
            <div>
              Privacy Policy
            </div>
            <div>
               Cookie Policy
            </div>
            <div>
               Partner Terms
            </div>

          </div>
          <div className="footer-under-hr-right">
            © 2017 Michael Coates, Inc. All Rights Reserved
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
