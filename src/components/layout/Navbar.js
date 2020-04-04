import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-primary mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to= "/">
              Your-Movie-Series
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-1">
              <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-imdb fa-5x" id="imdb-logo"/>
              </a>
            </li>
 
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;