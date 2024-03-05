import React from "react";
import { fetchFlights } from "../Api/FlightApi";

function FlightSearch({ setFlights }) {
  const handleSearch = async () => {
    const flights = await fetchFlights();
    setFlights(flights);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem",
        alignItems:'center'
      }}
    >
      <div style={{ display: "flex", alignItems: 'center' }}>
        <h1 style={{ color: "#0a0d4f" }}>Jet Set Go</h1>
        <img
          style={{ width: "3rem", height: "3rem" }}
          src={"https://cdn-icons-png.flaticon.com/512/3125/3125713.png"}
        />
      </div>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          backgroundColor: "#0a0d4f",
          border: "none",
          width: "15rem",
          height: '4rem',
          cursor: "pointer",
          fontSize: '1.1rem'
        }}
        onClick={handleSearch}
      >
        {/* SVG for search icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '0.5rem' }}>
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        Search All Flights
      </button>
    </div>
  );
}

export default FlightSearch;
