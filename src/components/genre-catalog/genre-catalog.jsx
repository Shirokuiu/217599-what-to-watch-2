import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import GenreCatalogTab from "../genre-catalog-tab/genre-catalog-tab";

import {MovieList} from "../movie-list/movie-list";

export const GenreCatalog = (props) => {
  const {onMovieClick, movies} = props;

  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenreCatalogTab />

    <MovieList films={movies} onMovieClick={onMovieClick}/>

    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  </section>;
};

GenreCatalog.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movie.genreCatalog.movies
});

export default connect(mapStateToProps)(GenreCatalog);

