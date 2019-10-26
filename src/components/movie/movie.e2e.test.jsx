import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Movie} from "./movie";

Enzyme.configure({adapter: new Adapter()});

it(`Get active movie id`, () => {
  const onMovieEnter = jest.fn();
  const props = {
    id: 0,
    onMovieEnter
  };

  const movie = shallow(<Movie {...props} />);

  movie.simulate(`mouseenter`, {target: {id: 0}});

  expect(onMovieEnter).toHaveBeenCalledWith(0);
});
