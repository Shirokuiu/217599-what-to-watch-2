import React from 'react';
import ReactDom from 'react-dom';

import {App} from "./components/app/app";

import {films} from "./mocks/mocks";

const init = () => {
  ReactDom.render(<App films={films}/>, document.querySelector(`#root`));
};

init();
