import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer";

export const LoadMore = (props) => {
  const {moviesLoadedCount, onLoadMoreClick} = props;

  const handleLoadMoreClick = () => {
    onLoadMoreClick(moviesLoadedCount);
  };

  return <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={handleLoadMoreClick}>Show more</button>
  </div>;
};

LoadMore.propTypes = {
  moviesLoadedCount: PropTypes.number.isRequired,
  onLoadMoreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  moviesLoadedCount: state.movie.genreCatalog.moviesLoadedCount
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMoreClick: (step) => {
    dispatch(ActionCreator.updateMoviesLoadedCount());
    dispatch(ActionCreator.loadMoreMovies(step));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore);
