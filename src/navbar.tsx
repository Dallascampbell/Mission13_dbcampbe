import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//Nav bar with reference to each page with bootstrap
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
      <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
        <ul className="navbar-nav flex-grow-1">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Podcasts">
              My Podcasts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Movies">
              Movie Collection
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
