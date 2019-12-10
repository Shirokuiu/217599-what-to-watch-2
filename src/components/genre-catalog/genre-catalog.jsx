import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import GenreCatalogTab from "../genre-catalog-tab/genre-catalog-tab";
import {LoadMore} from "../load-more/load-more";
import {MovieList} from "../movie-list/movie-list";

export const GenreCatalog = (props) => {
  const {movies, activeTab, moviesLoadedCount, onTabClick, onLoadMoreClick} = props;
  let genres = [];

  const getMoviesByGenre = (films) => {
    genres = activeTab.toLowerCase() !== `All genres`.toLowerCase() ?
      films.slice()
        .filter(({genre}) => genre.toLowerCase() === activeTab).slice(0, moviesLoadedCount) :
      films.slice(0, moviesLoadedCount);
  };

  getMoviesByGenre(movies);

  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenreCatalogTab onTabClick={onTabClick} activeTab={activeTab}/>

    <MovieList movies={genres} />

    {genres.length >= moviesLoadedCount ? <LoadMore onLoadMoreClick={onLoadMoreClick}/> : null}
  </section>;

};

GenreCatalog.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
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
    starring: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  })).isRequired,
  activeTab: PropTypes.string.isRequired,
  moviesLoadedCount: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
  onLoadMoreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies
});

export default connect(mapStateToProps)(GenreCatalog);

