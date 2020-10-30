import React from 'react';
import {RATING_BAR_DIVISION} from '../../const';
import reviewPropTypes from '../../mocks/review-prop-types';

const Review = ({review}) => {
  const formatDate = (date) => {
    const options = {
      year: `numeric`,
      month: `long`
    };
    return new Date(date).toLocaleDateString(`en-US`, options);
  };
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.author.avatar} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.author.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${review.value * RATING_BAR_DIVISION}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={review.date}>{formatDate(review.date)}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: reviewPropTypes
};

export default Review;
