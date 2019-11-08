import {films} from "./mocks/mocks";

export const AppSettings = {
  MOVIES_INIT_LENGTH: 8,
  MOVIES_TO_LOAD: 20
};

export const getMoviesByGenre = (movieGenre) => {
  const movieLowerCase = movieGenre.toLowerCase();
  const genreLowerCase = initialState.movie.genreCatalog.genre.toLowerCase();

  return movieLowerCase !== genreLowerCase ?
    films.slice().filter(({genre}) => genre.toLowerCase().includes(movieLowerCase)).slice(0, AppSettings.MOVIES_TO_LOAD) :
    films.slice(0, AppSettings.MOVIES_TO_LOAD);
};

export const getLoadedMovies = (step) => {
  if (films.length >= step) {
    return films.slice(0, step);
  }

  return films;
};

export const ActionCreator = {
  setGenre: (genre) => ({
    type: `SET_GENRE`,
    payload: genre
  }),
  filterMoviesByGenre: (genre) => ({
    type: `FILTER_MOVIES_BY_GENRE`,
    payload: getMoviesByGenre(genre)
  }),
  updateMoviesLoadedCount: () => ({
    type: `UPDATE_MOVIES_LOADED_COUNT`,
    payload: AppSettings.MOVIES_TO_LOAD
  }),
  resetMoviesLoadedCount: () => ({
    type: `RESET_MOVIES_LOADED_COUNT`,
    payload: AppSettings.MOVIES_INIT_LENGTH
  }),
  loadMoreMovies: (stepCount) => ({
    type: `LOAD_MORE_MOVIES`,
    payload: getLoadedMovies(stepCount + AppSettings.MOVIES_TO_LOAD)
  })
};

export const initialState = {
  movie: {
    genreCatalog: {
      genre: `All genres`,
      movies: films.slice(0, AppSettings.MOVIES_INIT_LENGTH),
      moviesLoadedCount: AppSettings.MOVIES_INIT_LENGTH
    }
  },
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
    case `UPDATE_MOVIES_LOADED_COUNT`:
      return Object.assign({}, state, {
        movie: {
          genreCatalog: Object.assign({}, state.movie.genreCatalog, {
            moviesLoadedCount: state.movie.genreCatalog.moviesLoadedCount + action.payload
          })
        }
      });
    case `RESET_MOVIES_LOADED_COUNT`:
      return Object.assign({}, state, {
        movie: {
          genreCatalog: Object.assign({}, state.movie.genreCatalog, {
            moviesLoadedCount: action.payload
          })
        }
      });
    case `LOAD_MORE_MOVIES`:
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
