import React from "react";
import { fetchFlights } from "../Api/FlightApi";
import './Flight.css'

function FlightSearch({ setFlights }) {
  const handleSearch = async () => {
    const flights = await fetchFlights();
    setFlights(flights);
  };

  return (
    <div className="searchContainer">
      <div className="logoSection">
        <h1 className="logoText">Jet Set Go</h1>
        <img
          alt="search icon"
          className="searchIcon"
          src={"https://cdn-icons-png.flaticon.com/512/3125/3125713.png"}
        />
      </div>
      <button className="searchButton" style={{alignItems:'center'}} onClick={handleSearch}>
        {/* SVG for search icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        Search All Flights
      </button>
    </div>
  );
}

export default FlightSearch;
