import {ActionCreator, getMoviesByGenre, initialState, reducer} from "./reducer";

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
      movie: {
        genreCatalog: {
          genre: `All genres`,
          movies: films
        }
      }
    }, {
      type: `SET_GENRE`,
      payload: `comedies`
    }))
      .toEqual({
        movie: {
          genreCatalog: {
            genre: `comedies`,
            movies: films
          }
        }
      });
  });

  it(`Reducer should return filtered movies`, () => {
    expect(reducer({
      movie: {
        genreCatalog: {
          genre: `All genres`,
          movies: films
        }
      }
    }, {
      type: `FILTER_MOVIES_BY_GENRE`,
      payload: films
    }))
      .toEqual({
        movie: {
          genreCatalog: {
            genre: `All genres`,
            movies: films
          }
        }
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
    expect(ActionCreator.filterMoviesByGenre(`Comedies`))
      .toEqual({
        type: `FILTER_MOVIES_BY_GENRE`,
        payload: getMoviesByGenre(`Comedies`)
      });
  });
});
