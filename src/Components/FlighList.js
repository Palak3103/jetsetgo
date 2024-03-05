import React, { useState } from "react";

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
      <div style={{ position: 'sticky', top: 0, zIndex: 2, backgroundColor: 'white', paddingInline: '2rem' }}>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            gap: "2rem",
            alignItems: 'center',
            marginBottom: '1rem'
          }}
        >
          <input
            type="text"
            style={{ width: '18rem', height: '3rem', paddingInline: '1rem' , }}
            placeholder="Filter by Airline"
            onChange={(e) => setFilter(e.target.value)}
          />
          <select
            style={{ width: '18rem', height: '3rem', paddingInline: '1rem' ,paddingBlock:'1rem'}}
            onChange={(e) => setSort(e.target.value)} defaultValue="asc"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div style={{  background: 'white', paddingInline: '2rem' }}>
        <div style={{ border: '1px solid #0a0d4f', padding: '1rem', borderRadius: '1rem', position: 'relative', height:'65vh' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'white', borderBottom: '1px solid black' }}>
            <h2 style={{ margin: 0, fontWeight: 'bold' }}>Airlines</h2>
            <h2 style={{ margin: 0, fontWeight: 'bold' }}>Cost</h2>
          </div>
          <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            {sortedFlights.map((flight, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: index !== sortedFlights.length - 1 ? '1px dotted grey' : 'none' }}>
                <span style={{ fontSize: '1rem' }}>{flight.airline}</span>
                <span style={{ fontSize: '1rem' }}>₹{flight.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightList;
