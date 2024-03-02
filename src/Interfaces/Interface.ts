type Astronaut = {
    message: string,
    people: AstronautInfo[],
    number: number
}

type AstronautInfo = {
    name: string,
    craft: string
}

export default Astronaut