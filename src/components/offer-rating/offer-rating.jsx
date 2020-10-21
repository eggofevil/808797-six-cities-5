import React from 'react';

const OfferRating = (reviews) => {

  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: `${20 * thisRating}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{thisRating}</span>
    </div>

    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `80%`}} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>

    <div className="reviews__rating rating">
      <div className="reviews__stars rating__stars">
        <span style={{width: `${20 * review.value}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>

  );
}

export default OfferRating;
