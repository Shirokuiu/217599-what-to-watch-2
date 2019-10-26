import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Movie} from "./movie";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is movie has clicked`, () => {
  const clickHandler = jest.fn();
  const movie = shallow(<Movie
    key={0}
    id={0}
    img={films[0].img}
    title={films[0].title}
    onMovieClick={clickHandler}
  />);

  movie.simulate(`click`);

  expect(clickHandler).toHaveBeenCalled();
});
