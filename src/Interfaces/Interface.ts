type Astronaut = {
    message: string,
    crafts: AstronautInfo[],
    number: number
}

type AstronautInfo = {
    shipName: string,
    members: string[]
}

export default Astronaut