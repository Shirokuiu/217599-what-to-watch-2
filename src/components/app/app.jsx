import React from "react";
import PropTypes from "prop-types";

import MainPage from "../main-page/main-page";

export const App = ({films}) => {
  return <MainPage filmsMock={films}/>;
};

App.propTypes = {
  films: PropTypes.array.isRequired
};
