import movieslist from "../../data";
import "../styles/movies.css";


const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
      <div className="image-container">
        <img src={movie.Poster} />
        <div className="rating">
          <span className="material-symbols-outlined">star</span>
          <span>{`${movie.imdbRating}/10 `}</span>
          <span>{`${movie.imdbVotes} Votes`}</span>
        </div>
      </div>
      <p>{movie.Title}</p>
      <p>{movie.Country}</p>
      <p>{movie.Language}</p>
    </div>
  );
};

export default MovieCard;
