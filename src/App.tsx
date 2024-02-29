import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './DataServices/DataServices';

function App() {
  const [astronautInfo, setAstronautInfo] = useState({});
  useEffect(() => {
    const astronautData = async () => {
      const fetchedData = await getData();
      setAstronautInfo(fetchedData);
    }

    astronautData();
  })
  return (
    <div >
      <h1>{astronautInfo}</h1>
    </div>
  );
}

export default App;
