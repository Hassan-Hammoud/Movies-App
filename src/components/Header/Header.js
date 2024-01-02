import React from "react";
import "./main.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">Movies</Link>
        </div>
        <ul className="nav">
          <li>
            <NavLink to="/">Watch List</NavLink>
          </li>
          <li>
            <NavLink to="/watched">Watched</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
