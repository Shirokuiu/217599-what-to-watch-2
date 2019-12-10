import React from "react";
import PropTypes from "prop-types";

export const LoadMore = (props) => {
  const {onLoadMoreClick} = props;

  const handleLoadMoreClick = () => {
    onLoadMoreClick();
  };

  return <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={handleLoadMoreClick}>Show more</button>
  </div>;
};

LoadMore.propTypes = {
  onLoadMoreClick: PropTypes.func.isRequired
};
