import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

import {Tab} from "../../mocks/mocks";

export const MovieTabs = (props) => {
  const {id} = props;

  return <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {Tab.tabs.map((tab, idx) => (
        <NavLink
          to={`/movie/${id}/${tab.toLowerCase()}`}
          activeClassName='movie-nav__item--active'
          key={tab + idx}
          className='movie-nav__item'
        >
          <span
            className="movie-nav__link"
            id={tab}
          >{tab}</span>
        </NavLink>))}
    </ul>
  </nav>;
};

MovieTabs.propTypes = {
  id: PropTypes.number.isRequired
};
