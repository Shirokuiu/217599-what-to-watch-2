import React from "react";
import PropTypes from "prop-types";

import {MovieList} from "../movie-list/movie-list";

export const SimmilarMovie = (props) => {
  const {mocks, onMovieClick, onMoviePageClick} = props;

  return <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>

    <MovieList films={mocks} onMovieClick={onMovieClick} onMoviePageClick={onMoviePageClick}/>
  </section>;
};

SimmilarMovie.propTypes = {
  mocks: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onMoviePageClick: PropTypes.func
};


