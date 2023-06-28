import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const Country = () => {
  const [countryDetails, setCountryDetails] = useState([]);
  

  const { name } = useParams();

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`).then((res) => {
      setCountryDetails(res.data);
    });
  }, [name]);

  return (
    <div>
      <button>Back</button>
      <div className="flag--info">
        {countryDetails.map((country, index) => {
          {
            
            const lang = Object.keys(country.languages);
            const currency = Object.keys(country.currencies)
            return (
              <>
                <img src={country.flags.png} alt="" />
                <div className="info">
                  <h3>{country.name.common}</h3>
                  <h6>Native Name: {country.name.official}</h6>
                  <h6>Population: {country.population}</h6>
                  <h6>Region: {country.region}</h6>
                  <h6>Sub-Region: {country.subregion} </h6>
                  <h6>Capital: {country.capital}</h6>
                  <h6>Currency: {currency.map((curr, index) => {
                    return (
                      
                      <span>
                         {country.currencies[curr].name}
                      </span>
                    )
                  })}</h6>
                  <h6 key={index}>
                    Languages:
                    {lang.map((language, index) => {
                      return (
                        <span key={index}> {country.languages[language]}</span>
                      );
                    })}
                  </h6>
                  <div className="border">
                    <p>Borders: {country.borders}</p>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};
