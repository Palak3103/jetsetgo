import React, { useState } from 'react';
import FlightSearch from './Components/FlightSearch';
import FlightList from './Components/FlighList'

function App() {
  const [flights, setFlights] = useState([]);

  return (
    <div className="App">
      
      <FlightSearch setFlights={setFlights} />
      {flights.length > 0 && <FlightList flights={flights} />}
    </div>
  );
}

export default App;
