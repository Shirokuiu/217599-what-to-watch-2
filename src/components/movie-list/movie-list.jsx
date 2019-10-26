import React from "react";
import PropTypes from "prop-types";

import {Movie} from "../movie/movie";

export const MovieList = (props) => {
  const {films, onMovieEnter} = props;

  return <div className="catalog__movies-list">
    {films.map(({img, title}, idx) => (
      <Movie
        key={Math.random() + idx}
        id={idx}
        img={img}
        title={title}
        onMovieEnter={onMovieEnter}
      />
    ))}
  </div>;
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact({
    img: PropTypes.string,
    title: PropTypes.string
  })).isRequired,
  onMovieEnter: PropTypes.func
};
