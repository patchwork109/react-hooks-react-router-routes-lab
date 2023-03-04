import React from "react";
import { actors } from "../data";

const renderActors = actors.map(actor => {
  return (
    <div key={actor.name}>
      <strong>{actor.name}</strong>
      <ul>
        <li>{actor.movies.join(", ")}</li>
      </ul>
    </div>
  )
})

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  )
}

export default Actors;
