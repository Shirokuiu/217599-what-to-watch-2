import React from "react";
import PropTypes from "prop-types";

export const MovieOverview = (props) => {
  const {movie} = props;

  const getRatingName = (rate) => {
    const rateFloor = Math.floor(rate);

    if (rateFloor < 3) {
      return `bad`;
    } else if (rateFloor >= 3 && rateFloor < 5) {
      return `normal`;
    } else if (rateFloor >= 5 && rateFloor < 8) {
      return `good`;
    } else if (rateFloor >= 8 && rateFloor < 10) {
      return `very good`;
    } else if (rateFloor >= 10) {
      return `awesome`;
    }

    return rateFloor;
  };

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{movie.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRatingName(movie.rating)}</span>
        <span className="movie-rating__count">{movie.scoresCount} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{movie.description}</p>

      <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {movie.starring.map((starring) => starring).join(`, `)}</strong></p>
    </div>
  </React.Fragment>;
};

MovieOverview.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }).isRequired
};
