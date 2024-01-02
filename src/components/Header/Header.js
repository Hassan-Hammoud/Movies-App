import React from "react";
import "./main.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="/">Movies</a>
        </div>
        <ul className="nav">
        <li>
          <a href="/d">Watched List</a>
        </li>
        <li>
          <a href="/d">Watched</a>
        </li>
        <li>
          <a className="btn" href="/d">
            Add
          </a>
        </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
