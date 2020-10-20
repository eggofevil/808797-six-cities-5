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
  );
}

export default OfferRating;
