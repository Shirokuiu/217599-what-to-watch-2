import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Movie} from "./movie";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is movie has been clicked`, () => {
  const handleMovieClick = jest.fn();
  const movie = shallow(<Movie
    film={films[0]}
    id={0}
    key={0}
    onMovieClick={handleMovieClick}
  />);

  const movieWrap = movie.find(`.small-movie-card`);

  movieWrap.simulate(`click`, {preventDefault: () => {}});

  expect(handleMovieClick).toHaveBeenCalled();
});
