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
          placeholder="Search Country"
          name=""
          id=""
          onChange={(e) => props.setSearchValue(e.target.value)}
          onClick={() => props.setStateFalse()}
        />
        <div className="select--span">
         
          <select  name="region" id="" onChange={(e) => {return props.setFilterValue(e.target.value), props.setStateTrue()}} >
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
          </select>
          <span className="span">
            <BsMoon />
            Dark Mode
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
