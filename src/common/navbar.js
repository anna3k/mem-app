import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
  return <nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="navbar-light" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/regular">REGULAR</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/hot">HOT</NavLink>
        </li>
      </ul>
    </div>
  </nav>
}