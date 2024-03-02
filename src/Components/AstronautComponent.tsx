import React, { useState } from 'react'
import Astronaut from '../Interfaces/Interface'

// We defined props as an object inside as a parameter 
// with the properties of shipName and members
const AstronautComponent = (props: {shipName: string, members: string[]}) => {
    return (
      <div>
          <h1>{props.shipName}</h1>
          {
            props.members.map((name, index) => {
              return (
                <div key={index}>
                  <h3>{name}</h3>
                  <br />
                </div>
              )
            })
          }
          <hr />
      </div>
    )
  }
  
  // We defined shipName and members as the parameters, and not a props object
  const AstronautComponent2 = (shipName: string, members: string[]) => {
    return (
      <div>
          <h1>{shipName}</h1>
          {
            members.map((name, index) => {
              return (
                <div key={index}>
                  <h3>{name}</h3>
                  <br />
                </div>
              )
            })
          }
          <hr />
      </div>
    )
  }
  
  export { AstronautComponent, AstronautComponent2 }
