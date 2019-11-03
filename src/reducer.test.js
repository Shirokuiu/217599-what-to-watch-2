import {ActionCreator, initialState, reducer} from "./reducer";

import {films} from "./mocks/mocks";

describe(`Reducers works correctly`, () => {
  it(`Reducer without additional parameters return initial state`, () => {
    expect(reducer(
        undefined,
        {}))
      .toEqual(initialState);
  });

  it(`Reducer should set genre by a given value`, () => {
    expect(reducer({
      genre: `All genres`,
      movies: films
    }, {
      type: `SET_GENRE`,
      payload: `comedies`
    }))
      .toEqual({
        genre: `comedies`,
        movies: films
      });
  });

  it(`Reducer should return filtered movies`, () => {
    expect(reducer({
      genre: `All genres`,
      movies: films
    }, {
      type: `FILTER_MOVIES`,
      payload: films[0]
    }))
      .toEqual({
        genre: `All genres`,
        movies: films[0]
      });
  });
});

describe(`Action creator works correctly`, () => {
  it(`Action creator set genre by a given value`, () => {
    expect(ActionCreator.setGenre(`comedies`))
      .toEqual({
        type: `SET_GENRE`,
        payload: `comedies`
      });
  });

  it(`Action creator filter movies by a given value`, () => {
    expect(ActionCreator.filterMovies(`comedies`))
      .toEqual({
        type: `FILTER_MOVIES`,
        payload: [films[0]]
      });
  });
});
