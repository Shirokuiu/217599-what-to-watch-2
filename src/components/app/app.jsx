import React from "react";

import {MainPage} from "../main-page/main-page";

const filmsName = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`
];

export const App = () => {
  const showMovie = () => {};

  return <MainPage filmsName={filmsName} showMovie={showMovie}/>;
};
