const getData = async () => {
    const promise = await fetch('http://api.open-notify.org/astros.json');
    const data: Astronaut = await promise.json();

    return data;
}

//Union example
let name: "Giselle" | true;

type Astronaut = {
    message: string,
    people: [
        {
            name: string,
            craft: string
        }
    ],
    number: number
}

export default getData;