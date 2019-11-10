import React from "react";
import PropTypes from "prop-types";

import {Movie} from "../movie/movie";

import {withMovieHover} from "../../hocs/with-movie-hover/with-movie-hover";

const MovieWrapped = withMovieHover(Movie);

export const MovieList = (props) => {
  const {films, onMovieClick, onMoviePageClick} = props;

  return <div className="catalog__movies-list">
    {films.map((film, idx) => (
      <MovieWrapped
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
