import React from 'react';

import {MainPage} from "../main-page/main-page";

const filmsName = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`
];

export const App = () => {
  return <MainPage filmsName={filmsName} />;
};
