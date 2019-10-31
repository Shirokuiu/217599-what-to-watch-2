import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MoviePage from "./movie-page";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is movie page have state - activeTab`, () => {
  const moviePage = shallow(<MoviePage
    filmsMock={films}
    movie={films[0]}
    onMovieClick={jest.fn()}
    movieId={0}
  />);

  expect(moviePage.state()).toHaveProperty(`activeTab`);
});
