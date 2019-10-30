import React from "react";
import PropTypes from "prop-types";

import Movie from "../movie/movie";

export const MovieList = (props) => {
  const {films} = props;

  return <div className="catalog__movies-list">
    {films.map((film, idx) => (
      <Movie
        film={film}
        id={idx}
        key={film.id}
      />
    ))}
  </div>;
};

MovieList.propTypes = {
  films: PropTypes.array
};
