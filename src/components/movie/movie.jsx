import React from "react";
import PropTypes from "prop-types";

export const Movie = (props) => {
  const {img, title, id, onMovieClick} = props;

  const movieClickHandler = () => {
    location.href = `/film-overview-${id}`;

    onMovieClick();
  };

  return <article className="small-movie-card catalog__movies-card" onClick={movieClickHandler}>
    <div className="small-movie-card__image">
      <img src={img} alt="Bohemian Rhapsody" width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href={`/film-overview-${id}`}>{title}</a>
    </h3>
  </article>;
};

Movie.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  onMovieClick: PropTypes.func
};
