import {films} from "./mocks/mocks";

const getMovies = (movieGenre) => {
  switch (movieGenre) {
    case `comedies`:
      return films.slice().filter(({genre}) => genre.includes(`comedies`));
    case `documentary`:
      return films.slice().filter(({genre}) => genre.includes(`documentary`));
  }
  return films;
};

export const ActionCreator = {
  setGenre: (genre) => ({
    type: `SET_GENRE`,
    payload: genre
  }),
  filterMovies: (genre) => {
    return {
      type: `FILTER_MOVIES`,
      payload: getMovies(genre)
    };
  }
};

export const initialState = {
  genre: `All genres`,
  movies: films
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case `FILTER_MOVIES`:
      return Object.assign({}, state, {
        movies: action.payload
      });
  }
  return state;
};
