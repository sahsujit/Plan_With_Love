import React, { useState } from "react";
import './App.css';
import Tours from "./component/Tours";
import data from './data';

function App() {
  const [tours, setTour]=useState(data)
  function removeTour(id){
    const newTour=tours.filter(tour => tour.id !== id);
    setTour(newTour);

  }
  if(tours.length === 0){
    return(
      <div className="refresh-container">
        <h2 className="refresh-title">No Tours Left</h2>
        <button className="refresh-btn" onClick={() => setTour(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
