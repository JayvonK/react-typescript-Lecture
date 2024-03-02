import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './DataServices/DataServices';
import Astronaut from './Interfaces/Interface';
import AstronautComponent from './Components/AstronautComponent';

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
      {
        astronautInfo?.people.map((astronaut, index) => {
          return (
            <div key={index}>
              <AstronautComponent name={astronaut.name} craft={astronaut.craft} />
              </div>
          )
        })
      }
      {/* <AstronautComponent props={astronautInfo}/> */}
    </div>
  );
}

export default App;
