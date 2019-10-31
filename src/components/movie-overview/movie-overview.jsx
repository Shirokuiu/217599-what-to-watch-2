import React from "react";
import PropTypes from "prop-types";

export const MovieOverview = (props) => {
  const {movie} = props;

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{movie.rate.currentRate}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">{movie.rate.allRate} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{movie.description}</p>

      <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {movie.starrings.map((starring) => starring).join(`, `)}</strong></p>
    </div>
  </React.Fragment>;
};

MovieOverview.propTypes = {
  movie: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    rate: PropTypes.exact({
      currentRate: PropTypes.number,
      allRate: PropTypes.number
    }).isRequired,
    description: PropTypes.string,
    director: PropTypes.string,
    starrings: PropTypes.array,
    preview: PropTypes.string
  }).isRequired
};
