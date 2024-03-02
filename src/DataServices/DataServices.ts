import Astronaut from "../Interfaces/Interface";

const getData = async () => {
    const promise = await fetch('https://astronautapi.azurewebsites.net/');
    const data: Astronaut = await promise.json();
    return data;
}


//Union example
let name: "Giselle" | true;

//
interface IStuff<userType> {
    stuff: userType
}

let coolStuff: IStuff<string | number> = {
    stuff: "hi"
}

export default getData;

