import Astronaut from "../Interfaces/Interface";

const getData = async () => {
    const promise = await fetch('http://api.open-notify.org/astros.json');
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

