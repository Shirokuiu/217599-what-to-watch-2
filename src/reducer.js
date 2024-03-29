import FilmModel from "./models/film-model";
import CommentModel from "./models/comment-model";

export const initialState = {
  movies: [],
  promo: {},
  comments: [],
  moviesFavorite: [],
  currentMovie: JSON.parse(window.localStorage.getItem(`currentMovie`)),
  isAuthorized: false,
  avatar: undefined
};

export const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_FAVORITE_MOVIES: `LOAD_FAVORITE_MOVIES`,
  CHECK_AUTHORIZATION: `CHECK_AUTHORIZATION`,
  GET_AVATAR: `GET_AVATAR`,
  UPDATE_CURRENT_MOVIE: `UPDATE_CURRENT_MOVIE`
};

const cashCurrentMovie = (movie) => {
  window.localStorage.setItem(`currentMovie`, JSON.stringify(movie));

  return movie;
};

export const Operation = {
  loadMovies: () => (dispatch, _, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        dispatch(ActionCreator.loadMovies(data));
      });
  },
  loadPromo: () => (dispatch, _, api) => {
    return api.get(`/films/promo`)
      .then(({data}) => {
        dispatch(ActionCreator.loadPromo(data));
      });
  },
  loadComments: (movieId) => (dispatch, _, api) => {
    return api.get(`/comments/${movieId}`)
      .then(({data}) => {
        dispatch(ActionCreator.loadComments(data));
      });
  },
  loadFavoriteMovies: () => (dispatch, _, api) => {
    return api.get(`/favorite`)
      .then(({data}) => {
        dispatch(ActionCreator.loadFavoriteMovies(data));
      });
  },
  addReview: (movieId, body, cb) => (dispatch, _, api) => {
    let error = false;
    return api.post(`/comments/${movieId}`, body)
      .then(({data}) => {
        error = false;
        cb(error);
        dispatch(ActionCreator.loadComments(data));
      })
      .catch(() => {
        error = true;
        cb(error);
      });
  },
  switchFavorite: (movieId, status, cb) => (dispatch, _, api) => {
    return api.post(`/favorite/${movieId}/${status}`)
      .then(() => {
        cb();
      });
  },
  logIn: (body) => (dispatch, _, api) => {
    return api.post(`/login`, body)
      .then(({data}) => {
        dispatch(ActionCreator.checkAuthorization(true));
        dispatch(ActionCreator.getAvatar(data.avatar_url));
      })
      .catch(() => {
        dispatch(ActionCreator.checkAuthorization(false));
      });
  },
  checkAuthorization: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then(({data}) => {
        dispatch(ActionCreator.checkAuthorization(true));
        dispatch(ActionCreator.getAvatar(data.avatar_url));
      })
      .catch(() => {
        dispatch(ActionCreator.checkAuthorization(false));
      });
  }
};

export const ActionCreator = {
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies
  }),
  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  loadFavoriteMovies: (movies) => ({
    type: ActionType.LOAD_FAVORITE_MOVIES,
    payload: movies
  }),
  checkAuthorization: (isAuth) => ({
    type: ActionType.CHECK_AUTHORIZATION,
    payload: isAuth
  }),
  getAvatar: (avatarUrl) => ({
    type: ActionType.GET_AVATAR,
    payload: avatarUrl
  }),
  updateCurrentMovie: (movieId) => ({
    type: ActionType.UPDATE_CURRENT_MOVIE,
    payload: movieId
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return Object.assign({}, state, {
        movies: FilmModel.parseFilms(action.payload)
      });
    case ActionType.LOAD_PROMO:
      return Object.assign({}, state, {
        promo: FilmModel.parseFilm(action.payload)
      });
    case ActionType.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: CommentModel.parseComments(action.payload)
      });
    case ActionType.LOAD_FAVORITE_MOVIES:
      return Object.assign({}, state, {
        moviesFavorite: FilmModel.parseFilms(action.payload)
      });
    case ActionType.CHECK_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorized: action.payload
      });
    case ActionType.GET_AVATAR:
      return Object.assign({}, state, {
        avatar: action.payload
      });
    case ActionType.UPDATE_CURRENT_MOVIE:
      return Object.assign({}, state, {
        currentMovie: cashCurrentMovie(state.movies[action.payload])
      });
  }
  return state;
};
