import React from "react";
import PropTypes from "prop-types";

export const MovieTabs = (props) => {
  const {movieId, onTabClick, activeTab} = props;

  const handleTabClick = (evt) => {
    evt.preventDefault();

    const {href, id} = evt.target;

    history.pushState(null, null, href);
    onTabClick(id);
  };

  return <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      <li className={activeTab.includes(`overview`) ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
        <a
          className="movie-nav__link"
          onClick={handleTabClick}
          href={`/movie-${movieId}-overview`}
          id="overview"
        >Overview</a>
      </li>
      <li className={activeTab.includes(`details`) ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
        <a
          className="movie-nav__link"
          onClick={handleTabClick}
          href={`/movie-${movieId}-details`}
          id="details"
        >Details</a>
      </li>
      <li className={activeTab.includes(`reviews`) ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
        <a
          className="movie-nav__link"
          onClick={handleTabClick}
          href={`/movie-${movieId}-reviews`}
          id="reviews"
        >Reviews</a>
      </li>
    </ul>
  </nav>;
};

MovieTabs.propTypes = {
  movieId: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired
};
