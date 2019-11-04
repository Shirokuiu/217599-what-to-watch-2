import {films} from "./mocks/mocks";

export const getMoviesByGenre = (movieGenre) => {
  const movieLowerCase = movieGenre.toLowerCase();
  const genreLowerCase = initialState.movie.genreCatalog.genre.toLowerCase();

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
  movie: {
    genreCatalog: {
      genre: `All genres`,
      movies: films
    }
  },
  settings: {
    movieToRow: 8,
    movieToLoad: 20
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`:
      return Object.assign({}, state, {
        movie: {
          genreCatalog: Object.assign({}, state.movie.genreCatalog, {
            genre: action.payload
          })
        }
      });
    case `FILTER_MOVIES_BY_GENRE`:
      return Object.assign({}, state, {
        movie: {
          genreCatalog: Object.assign({}, state.movie.genreCatalog, {
            movies: action.payload
          })
        }
      });
  }
  return state;
};
