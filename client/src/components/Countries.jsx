import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../styles/Countries.scss";
// import from react
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = (props) => {
  const [countries, setCountries] = useState([]);
  const [isTrue, setIsTrue] = useState(false);

  const setStateTrue = () => {
    setIsTrue(true);
  };

  const setStateFalse = () => {
    setIsTrue(false);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar
        setSearchValue={props.setSearchValue}
        setFilterValue={props.setFilterValue}
        setStateTrue={setStateTrue}
        setStateFalse={setStateFalse}
        theme={props.theme}
        setWebTheme={props.setWebTheme}
      />
      <section>
        {isTrue === false &&
          countries
            .filter((country) => {
              return props.search.toLowerCase() === ""
                ? country
                : country.name.common.toLowerCase().includes(props.search);
            })
            .map((country, index) => {
              return (
                <div
                  className={
                    props.theme === "light"
                      ? "country--card light"
                      : "country--card  dark"
                  }
                >
                  <Link
                    key={index}
                    to={`${country.name.common}`}
                    className={props.theme === "light" ? "light" : "dark"}
                  >
                    <img src={country.flags.png} alt="" />
                    <div className="country--info">
                      <p>
                        <span>Country:</span> {country.name.common}
                      </p>
                      <p>
                        <span>Population:</span> {country.population}
                      </p>
                      <p>
                        <span>Region:</span> {country.region}
                      </p>
                      <p>
                        <span>Capital:</span> {country.capital}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}

        {isTrue &&
          countries
            .filter((country) => {
              return country.region === props.region
                ? country
                : country.region[props.region];
            })
            .map((country, index) => {
              return (
                <div
                  key={index}
                  className={
                    props.theme === "light"
                      ? "country--card light"
                      : "country--card  dark"
                  }
                >
                  <Link
                    key={index}
                    to={`${country.name.common}`}
                    className={props.theme === "light" ? "light" : "dark"}
                  >
                    <img src={country.flags.png} alt="" />
                    <div className="country--info">
                      <p>
                        <span>Country:</span> {country.name.common}
                      </p>
                      <p>
                        <span>Population:</span> {country.population}
                      </p>
                      <p>
                        <span>Region:</span> {country.region}
                      </p>
                      <p>
                        <span>Capital:</span> {country.capital}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
      </section>
    </div>
  );
};

export default Countries;
