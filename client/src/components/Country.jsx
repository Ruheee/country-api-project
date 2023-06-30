import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsMoon } from "react-icons/bs";
import "../styles/Country.scss";
import { Toggle } from "./Toggle";

export const Country = (props) => {
  const [countryDetails, setCountryDetails] = useState([]);


  const clearSearch = () => {
    props.setSearch("")
  }
  const { name } = useParams();

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`).then((res) => {
      setCountryDetails(res.data);
    });
  }, [name]);

  return (
    <div  
  >
      <header>
        <nav className="navbar">
          <h1>Where in the world?</h1>
          <input type="search" placeholder="Search Country" name="" id="" />
          <div className="select--span">
            <select>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Americas">Americas</option>
              <option value="Africa">Africa</option>
              <option value="Oceania">Oceania</option>
            </select>
            <Toggle setWebTheme={props.setWebTheme}/>
          </div>
        </nav>
      </header>
      <div className={
      props.theme === "flag--info light"
        ? "light"
        : "dark"
    } className="flag--info">
        {countryDetails.map((country, index) => {
          {
            const lang = Object.keys(country.languages);
            const currency = Object.keys(country.currencies);
            return (
              <>
                <div className="flag--btn">
                  <Link onClick={() => clearSearch()} to={"/"}>Back</Link>
                  <img src={country.flags.png} alt="" />
                </div>
                <div className="info">
                  <h3>{country.name.common}</h3>
                  <p>
                    <span>Native Name:</span> {country.name.official}{" "}
                  </p>
                  <p>
                    <span>Population:</span> {country.population}
                  </p>
                  <p>
                    <span>Region:</span> {country.region}
                  </p>
                  <p>
                    <span>Sub-Region:</span> {country.subregion}{" "}
                  </p>
                  <p>
                    <span>Currency:</span>{" "}
                    {currency.map((curr, index) => {
                      return <span>{country.currencies[curr].name}</span>;
                    })}
                  </p>
                  <p key={index}>
                    <span>Language:</span>{" "}
                    {lang.map((language, index) => {
                      return <> {country.languages[language]}</>;
                    })}
                  </p>
                  
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};
