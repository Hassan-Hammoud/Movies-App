import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <a href="/">Movies</a>
      </div>
      <ul className="nav-links"></ul>
      <li><a href="/d">Watched List</a></li>
      <li><a href="/d">Watched</a></li>
      <li><a className="btn" href="/d">Add</a></li>
    </div>
  );
};

export default Header;
