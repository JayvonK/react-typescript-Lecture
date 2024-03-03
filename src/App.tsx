import {
  AstronautComponent,
  AstronautComponent2,
} from "./Components/AstronautComponent";
import { useEffect, useState } from "react";
import "./App.css";
import getData from "./DataServices/DataServices";
import Astronaut from "./Interfaces/Interface";

function App() {
  const [astronautInfo, setAstronautInfo] = useState<Astronaut>();
  let [count, setCount] = useState<number>(0);

  const nextPage = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const astronautData = async () => {
      const fetchData = await getData();
      setAstronautInfo(fetchData);
    };
    astronautData();
  }, []);
  return (
    <div>
      <button onClick={() => nextPage()}>Next Page</button>
      {
        // Here we are passing through shipName and members. Whenever you pass through properties they all become properties of
        // the define prop variable in the component
        astronautInfo && (
          <AstronautComponent
            shipName={astronautInfo.crafts[count].shipName}
            members={astronautInfo.crafts[count].members}
          />
        )

        // Here we are trying to pass through shipName and members, like above, but when passing properties through to a child component
        // they all become properties one props object. (Check AstronautComponent to see the difference between Component1 and 2)
        // So when a component needs to take in variables with TypeScript, the props variable needs to be assigned a property of that variable
        // astronautData && <AstronautComponent2 shipName={astronautInfo.crafts[count].shipName} members={astronautInfo.crafts[count].members} />
      }
    </div>
  );
}

export default App;
