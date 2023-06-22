import React from "react";
import { useEffect, useState } from "react";
import axios from "axios"
const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
    });
  }, []);


  return (
    <div>
      {countries.map((country) => {
        return(
          <div>
            <li>{country.name.common}</li>
          </div>
        )
      })}
    </div>
  );
};

export default Countries;
