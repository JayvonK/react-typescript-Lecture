import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './DataServices/DataServices';
import Astronaut from './Interfaces/Interface';

function App() {
  const [astronautInfo, setAstronautInfo] = useState<Astronaut>();
  useEffect(() => {
    const astronautData = async () => {
      const fetchedData = await getData();
      setAstronautInfo(fetchedData);
    }

    astronautData();
  })
  return (
    <div >
      <h1>{astronautInfo?.people.map(person => person.name)}</h1>
    </div>
  );
}

export default App;
