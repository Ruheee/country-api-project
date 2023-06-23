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
          <select name="" id="" onChange={(e) => props.setFilterValue(e.target.value)} onClick={props.setStateTrue()}>
            Filter by region
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
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
