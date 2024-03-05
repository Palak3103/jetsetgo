import React, { useState } from "react";
import './Flight.css'; // Import the CSS file here

function FlightList({ flights }) {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("asc");

  const filteredFlights = flights.filter((flight) =>
    filter ? flight.airline.includes(filter) : true
  );

  const sortedFlights = filteredFlights.sort((a, b) =>
    sort === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div>
      <div className="stickyHeader">
        <div className="controls">
          <input
            type="text"
            className="input"
            placeholder="Filter by Airline"
            onChange={(e) => setFilter(e.target.value)}
          />
          <select
            className="input"
            onChange={(e) => setSort(e.target.value)} defaultValue="asc"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="container">
        <div className="borderBox">
          <div className="header">
            <h2 className="colHeading">Airlines</h2>
            <h2 className="colHeading">Cost</h2>
          </div>
          <div className="scrollArea">
            {sortedFlights.map((flight, index) => (
              <div key={index} className={`flightRow ${index !== sortedFlights.length - 1 ? '' : 'lastRow'}`}>
                <span className="flightInfo">{flight.airline}</span>
                <span className="flightInfo">₹{flight.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightList;
