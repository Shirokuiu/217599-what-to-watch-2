import {
  ActionCreator,
  ActionType,
  AppSettings,
  getLoadedMovies,
  getMoviesByGenre,
  initialState,
  reducer
} from "./reducer";

import {films} from "./mocks/mocks";

describe(`Reducers works correctly`, () => {
  it(`Reducer without additional parameters return initial state`, () => {
    expect(reducer(
        undefined,
        {}))
      .toEqual(initialState);
  });

  it(`Reducer should set genre by a given value`, () => {
    expect(reducer(Object.assign({}, initialState), {
      type: ActionType.SET_GENRE,
      payload: `comedies`
    })).toEqual(Object.assign({}, initialState, {
      movie: {
        genreCatalog: Object.assign({}, initialState.movie.genreCatalog, {
          genre: `comedies`
        })
      }
    }));
  });

  it(`Reducer should return filtered movies`, () => {
    expect(reducer(Object.assign({}, initialState, {
      movie: {
        genreCatalog: Object.assign({}, initialState.movie.genreCatalog, {
          genre: `Comedies`,
          movies: getMoviesByGenre(`Comedies`)
        })
      }
    }), {
      type: ActionType.FILTER_MOVIES_BY_GENRE,
      payload: getMoviesByGenre(`Comedies`)
    })).toEqual(Object.assign({}, initialState, {
      movie: {
        genreCatalog: Object.assign({}, initialState.movie.genreCatalog, {
          genre: `Comedies`,
          movies: films.filter(({genre}) => genre.includes(`Comedies`))
        })
      }
    }));
  });

  it(`Reducer should update movies by loaded count`, () => {
    expect(reducer(Object.assign({}, initialState), {
      type: ActionType.UPDATE_MOVIES_LOADED_COUNT,
      payload: AppSettings.MOVIES_TO_LOAD
    })).toEqual(Object.assign({}, initialState, {
      movie: {
        genreCatalog: Object.assign({}, initialState.movie.genreCatalog, {
          moviesLoadedCount: AppSettings.MOVIES_INIT_LENGTH + AppSettings.MOVIES_TO_LOAD
        })
      }
    }));
  });

  it(`Reducer should reset movies by loaded count by a given value`, () => {
    expect(reducer(Object.assign({}, initialState), {
      type: ActionType.RESET_MOVIES_LOADED_COUNT,
      payload: AppSettings.MOVIES_TO_LOAD
    })).toEqual(Object.assign({}, initialState, {
      movie: {
        genreCatalog: Object.assign({}, initialState.movie.genreCatalog, {
          moviesLoadedCount: AppSettings.MOVIES_TO_LOAD
        })
      }
    }));
  });

  it(`Reducer should return new loaded movies`, () => {
    expect(reducer(Object.assign({}, initialState), {
      type: ActionType.LOAD_MORE_MOVIES,
      payload: getLoadedMovies(AppSettings.MOVIES_INIT_LENGTH)
    })).toEqual(Object.assign({}, initialState, {
      movie: {
        genreCatalog: Object.assign({}, initialState.movie.genreCatalog, {
          movies: films.slice(0, AppSettings.MOVIES_INIT_LENGTH)
        })
      }
    }));
  });
});

describe(`Action creator works correctly`, () => {
  it(`Action creator set genre by a given value`, () => {
    expect(ActionCreator.setGenre(`comedies`))
      .toEqual({
        type: ActionType.SET_GENRE,
        payload: `comedies`
      });
  });

  it(`Action creator filter movies by a given value`, () => {
    expect(ActionCreator.filterMoviesByGenre(`Comedies`))
      .toEqual({
        type: ActionType.FILTER_MOVIES_BY_GENRE,
        payload: getMoviesByGenre(`Comedies`)
      });
  });

  it(`Action creator update movies loaded count by a given value for app settings`, () => {
    expect(ActionCreator.updateMoviesLoadedCount()).toEqual({
      type: ActionType.UPDATE_MOVIES_LOADED_COUNT,
      payload: AppSettings.MOVIES_TO_LOAD
    });
  });

  it(`Action creator reset movies loaded count`, () => {
    expect(ActionCreator.resetMoviesLoadedCount()).toEqual({
      type: ActionType.RESET_MOVIES_LOADED_COUNT,
      payload: AppSettings.MOVIES_INIT_LENGTH
    });
  });

  it(`Action creator return loaded movies by a given value`, () => {
    expect(ActionCreator.loadMoreMovies(AppSettings.MOVIES_INIT_LENGTH)).toEqual({
      type: ActionType.LOAD_MORE_MOVIES,
      payload: films.slice(0, AppSettings.MOVIES_INIT_LENGTH + AppSettings.MOVIES_TO_LOAD)
    });
  });
});

describe(`Function - getMoviesByGenre, correctly works`, () => {
  it(`Function - getMoviesByGenre should return movies by a given parameter - All genres`, () => {
    expect(getMoviesByGenre(`All genres`)).toEqual(films.slice(0, AppSettings.MOVIES_TO_LOAD));
  });

  it(`Function - getMoviesByGenre should return movies by a given parameter is - Comedies`, () => {
    expect(getMoviesByGenre(`Comedies`)).toEqual(getMoviesByGenre(`Comedies`));
  });
});
