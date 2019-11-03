import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {Tab} from "../../mocks/mocks";

export default class MovieTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(evt) {
    evt.preventDefault();

    const {onTabClick} = this.props;
    const {href, id} = evt.target;

    history.pushState(null, null, href);
    onTabClick(id);
  }

  render() {
    const {movieId, activeTab} = this.props;

    return <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Tab.moviePage.map((tab, idx) => (
          <li
            key={tab + idx}
            className={
              activeTab.toLowerCase()
                .includes(tab.toLowerCase()) ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`
            }
          >
            <a
              className="movie-nav__link"
              onClick={this.handleTabClick}
              href={`/movie-${movieId}-${tab.toLowerCase()}`}
              id={tab}
            >{tab}</a>
          </li>))}
      </ul>
    </nav>;
  }
}

MovieTabs.propTypes = {
  movieId: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired
};
