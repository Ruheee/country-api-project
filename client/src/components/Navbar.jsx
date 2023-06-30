import React from "react";

import "../styles/Navbar.scss";
import { Toggle } from "./Toggle";
function Navbar(props) {
  return (
    <header>
      <nav className="navbar">
        <h1>Where in the world?</h1>
        <input
          className={props.theme === "light" ? "light" : "dark"}
          type="search"
          placeholder="Search Country"
          name=""
          id=""
          onChange={(e) => props.setSearchValue(e.target.value)}
          onClick={() => props.setStateFalse()}
        />
        <div className="select--span">
          <select
            name="region"
            id=""
            onChange={(e) => {
              return props.setFilterValue(e.target.value), props.setStateTrue();
            }}
            className={props.theme === "light" ? "light" : "dark"}
          >
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
          </select>
          <Toggle theme={props.theme} setWebTheme={props.setWebTheme} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
