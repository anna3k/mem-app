import React from "react";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="navbar-light" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/regular">REGULAR</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hot">HOT</Link>
        </li>
      </ul>
    </div>
  </nav>
}