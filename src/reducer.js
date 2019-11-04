import {films} from "./mocks/mocks";

const getMoviesByGenre = (movieGenre) => {
  const movieLowerCase = movieGenre.toLowerCase();
  const genreLowerCase = initialState.genre.toLowerCase();

  return movieLowerCase !== genreLowerCase ?
    films.slice().filter(({genre}) => genre.toLowerCase().includes(movieLowerCase)) :
    films;
};

export const ActionCreator = {
  setGenre: (genre) => ({
    type: `SET_GENRE`,
    payload: genre
  }),
  filterMoviesByGenre: (genre) => ({
    type: `FILTER_MOVIES_BY_GENRE`,
    payload: getMoviesByGenre(genre)
  })
};

export const initialState = {
  genre: `All genres`,
  movies: films,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case `FILTER_MOVIES_BY_GENRE`:
      return Object.assign({}, state, {
        movies: action.payload
      });
  }
  return state;
};
