import React from "react";
import { directors } from "../data";

function Directors() {

  const renderDirectors = directors.map(director => {
    return (
      <div key={director.name}>
        <strong>{director.name}</strong>
        <ul>
          <li>{director.movies.join(", ")}</li>
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  )
}

export default Directors;
