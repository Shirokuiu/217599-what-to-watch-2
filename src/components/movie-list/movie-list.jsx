import React from "react";
import PropTypes from "prop-types";

import {Movie} from "../movie/movie";

export const MovieList = (props) => {
  const {films, onMovieClick} = props;

  return <div className="catalog__movies-list">
    {films.map(({img, title}, idx) => (
      <Movie
        key={Math.random() + idx}
        id={idx}
        img={img}
        title={title}
        onMovieClick={onMovieClick}
      />
    ))}
  </div>;
};

MovieList.propTypes = {
  films: PropTypes.array,
  onMovieClick: PropTypes.func
};
