import React from "react";
import PropTypes from "prop-types";

import {MainPage} from "../main-page/main-page";
import {MovieOverviewPage} from "../movie-details-page/movie-overview-page";

const getPageScreen = (mocks) => {
  switch (location.pathname) {
    case `/`:
      return <MainPage filmsMock={mocks}/>;
    case `/film-overview-${getCurrentMovie(`id`)}`:
      return <MovieOverviewPage movie={getCurrentMovie(`movie`, mocks)}/>;
  }

  return null;
};

const getCurrentMovie = (mode, mocks = null) => {
  switch (mode) {
    case `id`:
      return location.pathname.split(`-`).splice(-1);
    case `movie`:
      return mocks[location.pathname.split(`-`).splice(-1)];
  }

  return null;
};

export const App = (props) => {
  const {films} = props;

  return <React.Fragment>{getPageScreen(films)}</React.Fragment>;
};

App.propTypes = {
  films: PropTypes.array.isRequired
};
