import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {MovieTabs} from "./movie-tabs";

Enzyme.configure({adapter: new Adapter()});

it(`Is tab clicked`, () => {
  const clickHandler = jest.fn();
  const movieTabs = shallow(<MovieTabs
    movieId={0}
    onTabClick={clickHandler}
    activeTab={`details`}
  />);

  const tabs = movieTabs.find(`.movie-nav__link`);

  tabs.forEach((tab) => tab.simulate(`click`, {preventDefault: () => {}, target: ``}));

  expect(clickHandler).toHaveBeenCalledTimes(tabs.length);
});
