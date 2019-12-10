import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import Avatar from "../avatar/avatar";
import {Breadcrumbs} from "../breadcrumbs/breadcrumbs";

export const Header = (props) => {
  const {parent, movieId, movies} = props;
  const ParentStatus = {
    ADD_REVIEW: `addReview`,
    MY_LIST: `myList`
  };

  return <header className={ParentStatus[parent] === ParentStatus.MY_LIST ? `page-header user-page__head` : `page-header movie-card__head`}>
    <div className="logo">
      <Link to="/" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>

    {ParentStatus[parent] === ParentStatus.ADD_REVIEW ? <Breadcrumbs movieId={movieId} movies={movies}/> : null}
    {ParentStatus[parent] === ParentStatus.MY_LIST ? <h1 className="page-title user-page__title">My list</h1> : null}

    <Avatar />
  </header>;
};

Header.propTypes = {
  parent: PropTypes.string,
  movieId: PropTypes.number,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }))
};
