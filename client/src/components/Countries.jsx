import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
// import from react
import { useEffect, useState } from "react";

const Countries = (props) => {
  const [countries, setCountries] = useState([]);
  const [isTrue, setTrue] = useState(false);

  const setStateTrue = () => {
    setTrue(true);
  };

  useEffect(() => {
    setTrue(false);
  },[]);



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
      />
      <section>
        {!isTrue &&
          countries
            .filter((country) => {
              return props.search.toLowerCase() === ""
                ? country
                : country.name.common.toLowerCase().includes(props.search);
            })
            .map((country, index) => {
              return (
                <div key={index}>
                  <ul>
                    <img src={country.flags.png} alt="" />
                    <li>{country.name.common}</li>
                    <li>{country.population}</li>
                    <li>{country.region}</li>
                    <li>{country.capital}</li>
                  </ul>
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
                <div key={index}>
                  <ul>
                    <img src={country.flags.png} alt="" />
                    <li>{country.name.common}</li>
                    <li>{country.population}</li>
                    <li>{country.region}</li>
                    <li>{country.capital}</li>
                  </ul>
                </div>
              );
            })}
      </section>
    </div>
  );
};

export default Countries;
