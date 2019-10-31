import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Movie from "./movie";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Movie have state - isPlaying`, () => {
  const movie = shallow(<Movie
    film={films[0]}
    id={0}
    key={0}
    onMovieClick={jest.fn()}
  />);

  expect(movie.state()).toHaveProperty(`isPlaying`);
});

describe(`Show movie preview`, () => {
  const movie = shallow(<Movie
    film={films[0]}
    id={0}
    key={0}
    onMovieClick={jest.fn()}
  />);

  it(`Movie set state isPlaying - true, when mouseenter`, () => {
    movie.simulate(`mouseEnter`);

    setTimeout(() => {
      expect(movie.state(`isPlaying`)).toBeTruthy();
    }, 1000);
  });

  it(`Movie set state isPlaying - false, when mouseleave`, () => {
    movie.simulate(`mouseLeave`);

    expect(movie.state(`isPlaying`)).toBeFalsy();
  });
});

