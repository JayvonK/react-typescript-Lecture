import React, { useState } from 'react'
import Astronaut from '../Interfaces/Interface'

const AstronautComponent = (props: {name: string, craft: string}) => {
  return (
    <div>
      {/* <h1>{astronautInfo && props.people.map(person => `${person.name} ${person.craft}`)}</h1> */}
      <h1>{props.craft}</h1>
      <h1>{props.name}</h1>
      <hr />
    </div>
  )
}

export default AstronautComponent
