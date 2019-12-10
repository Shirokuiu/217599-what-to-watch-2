import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";

import {MoviePage} from "./movie-page";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is movie page rendered`, () => {
  const tree = shallow(<BrowserRouter>
    <MoviePage
      match={{
        params: {
          movieId: `0`
        }
      }}
      history={{}}
      movies={films}
      isMoviesLoaded={true}
    />
  </BrowserRouter>);

  expect(toJson(tree)).toMatchSnapshot();
});

