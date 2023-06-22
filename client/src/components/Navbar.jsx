import React from "react";

import { BsMoon } from "react-icons/bs";
import "../styles/Navbar.scss";
function Navbar(props) {
  return (
    <header>
      <nav className="navbar">
        <h1>Where in the world?</h1>
        <input
          type="search"
          name=""
          id=""
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
        <div>
          <select name="" id="">
            Filter by region
            <option value="">Europe</option>
            <option value="">Asia</option>
            <option value="">Americas</option>
            <option value="">Africa</option>
            <option value="">Oceania</option>
          </select>
          <span>
            <BsMoon />
            Dark Mode
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
