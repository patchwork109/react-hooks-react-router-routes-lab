import React from "react";
import { movies } from "../data";

function Movies() {

  const renderMovies = movies.map(movie => {
    console.log(movie.genres)
    return (
      <div key={movie.title}>
        <strong>{movie.title}</strong> - {movie.time} minutes
        <ul>
          <li>{movie.genres.join(", ")}</li>
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  )
}

export default Movies;
