import React from "react";
import PropTypes from "prop-types";

import {MovieList} from "../movie-list/movie-list";

export const SimmilarMovie = (props) => {
  const {simmilarMovies} = props;

  return <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>

    <MovieList movies={simmilarMovies}/>
  </section>;
};

SimmilarMovie.propTypes = {
  simmilarMovies: PropTypes.arrayOf(PropTypes.shape({
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
    starrings: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  })).isRequired
};


