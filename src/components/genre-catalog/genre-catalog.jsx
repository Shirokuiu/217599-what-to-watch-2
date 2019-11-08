import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import GenreCatalogTab from "../genre-catalog-tab/genre-catalog-tab";
import LoadMore from "../load-more/load-more";

import {MovieList} from "../movie-list/movie-list";

export const GenreCatalog = (props) => {
  const {onMovieClick, movies, moviesLoadedCount} = props;

  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenreCatalogTab />

    <MovieList films={movies} onMovieClick={onMovieClick}/>

    {movies.length >= moviesLoadedCount ? <LoadMore /> : null}
  </section>;
};

GenreCatalog.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  moviesLoadedCount: PropTypes.number
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movie.genreCatalog.movies,
  moviesLoadedCount: state.movie.genreCatalog.moviesLoadedCount
});

export default connect(mapStateToProps)(GenreCatalog);

