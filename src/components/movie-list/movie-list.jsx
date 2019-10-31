import React from "react";
import PropTypes from "prop-types";

import Movie from "../movie/movie";

export const MovieList = (props) => {
  const {films, onMovieClick, onMoviePageClick} = props;

  return <div className="catalog__movies-list">
    {films.map((film, idx) => (
      <Movie
        film={film}
        id={idx}
        onMovieClick={onMovieClick}
        onMoviePageClick={onMoviePageClick}
        key={film.id}
      />
    ))}
  </div>;
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onMoviePageClick: PropTypes.func
};
