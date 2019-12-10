import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";

import {MovieList} from "./movie-list";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is movie list rendered`, () => {
  const tree = shallow(<BrowserRouter>
    <MovieList
      movies={films}
    />
  </BrowserRouter>);

  expect(toJson(tree)).toMatchSnapshot();
});
