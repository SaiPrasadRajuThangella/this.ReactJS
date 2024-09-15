import { useState } from "react";
import movieslist from "../data.js";
// console.log("asfadf")
import MovieCard from "./components/MovieCard.js";
function MoviesApp() {
  const [selectedOption, setSelectedOption] = useState("");

  function selectRating(event) {
    const value = event.target.value;
    value !== "select" ? setSelectedOption(value) : setSelectedOption("")
    // setSelectedOption(event.target.value);
    console.log(event.target.value)
  }
  return (
    <div>
      <div>
        <label htmlFor="options">Choose the Rating:</label>
        <select id="options" onChange={selectRating}>
          <option  value="select">select</option>
          <option>10</option>
          <option>9.5</option>
          <option>9</option>
          <option>8.5</option>
          <option>8</option>
          <option>7.5</option>
          <option>7</option>
        </select>
      </div>
      <div className="movies-list">
        {/* filter(movie=>Number(movie.imdbRating)>=value) */}
        {movieslist
          .filter((movie) => Number(movie.imdbRating) >= Number(selectedOption))
          .map((movie) => (
            <MovieCard movie={movie} />
          ))}
      </div>{" "}
    </div>
  );
}

export default MoviesApp;
