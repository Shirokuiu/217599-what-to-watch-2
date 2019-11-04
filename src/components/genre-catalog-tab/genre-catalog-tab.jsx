import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer";

import {Tab} from "../../mocks/mocks";

export const GenreCatalogTab = (props) => {
  const {onTabClick, genre} = props;

  const handleTabClick = (evt) => {
    const {target} = evt;

    evt.preventDefault();

    onTabClick(target.textContent.toLowerCase());
  };

  return <ul className="catalog__genres-list">
    {Tab.genreCatalog.map((tab, idx) => (
      <li
        key={tab + idx}
        className={
          genre.toLowerCase()
            .includes(tab.toLowerCase()) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`
        }
      >
        <a
          href="#"
          className="catalog__genres-link"
          onClick={handleTabClick}
        >{tab}</a>
      </li>
    ))}
  </ul>;
};

GenreCatalogTab.propTypes = {
  genre: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.movie.genreCatalog.genre
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (genre) => {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.filterMoviesByGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreCatalogTab);
