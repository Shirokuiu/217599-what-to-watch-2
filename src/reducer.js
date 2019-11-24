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

export const ActionType = {
  SET_GENRE: `SET_GENRE`,
  FILTER_MOVIES_BY_GENRE: `FILTER_MOVIES_BY_GENRE`,
  UPDATE_MOVIES_LOADED_COUNT: `UPDATE_MOVIES_LOADED_COUNT`,
  RESET_MOVIES_LOADED_COUNT: `RESET_MOVIES_LOADED_COUNT`,
  LOAD_MORE_MOVIES: `LOAD_MORE_MOVIES`
};

export const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre
  }),
  filterMoviesByGenre: (genre) => ({
    type: ActionType.FILTER_MOVIES_BY_GENRE,
    payload: getMoviesByGenre(genre)
  }),
  updateMoviesLoadedCount: () => ({
    type: ActionType.UPDATE_MOVIES_LOADED_COUNT,
    payload: AppSettings.MOVIES_TO_LOAD
  }),
  resetMoviesLoadedCount: () => ({
    type: ActionType.RESET_MOVIES_LOADED_COUNT,
    payload: AppSettings.MOVIES_INIT_LENGTH
  }),
  loadMoreMovies: (stepCount) => ({
    type: ActionType.LOAD_MORE_MOVIES,
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
    case ActionType.SET_GENRE:
      return Object.assign({}, state, {
        movie: {
          genreCatalog: Object.assign({}, state.movie.genreCatalog, {
            genre: action.payload
          })
        }
      });
    case ActionType.FILTER_MOVIES_BY_GENRE:
      return Object.assign({}, state, {
        movie: {
          genreCatalog: Object.assign({}, state.movie.genreCatalog, {
            movies: action.payload
          })
        }
      });
    case ActionType.UPDATE_MOVIES_LOADED_COUNT:
      return Object.assign({}, state, {
        movie: {
          genreCatalog: Object.assign({}, state.movie.genreCatalog, {
            moviesLoadedCount: state.movie.genreCatalog.moviesLoadedCount + action.payload
          })
        }
      });
    case ActionType.RESET_MOVIES_LOADED_COUNT:
      return Object.assign({}, state, {
        movie: {
          genreCatalog: Object.assign({}, state.movie.genreCatalog, {
            moviesLoadedCount: action.payload
          })
        }
      });
    case ActionType.LOAD_MORE_MOVIES:
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
