import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app";

import {reducer} from "./reducer";

import {films} from "./mocks/mocks";

const init = () => {
  const store = createStore(reducer);

  ReactDom.render(<Provider store={store}>
    <App films={films}/>
  </Provider>,
  document.querySelector(`#root`));
};

init();
