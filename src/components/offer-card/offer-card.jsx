import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {RATING_BAR_DIVISION} from '../../const';

import offerPropTypes from '../../mocks/offer-prop-types';
import reviewPropTypes from '../../mocks/review-prop-types';

const OfferCard = ({offer, onMouseEnter, onMouseLeave, offerReviews}) => {
  let offerRating = (offerReviews.reduce((acc, review) => acc + review.value, 0) / offerReviews.length).toFixed(1);
  let offerLinkProps = {
    pathname: `/offer:${offer.id}`,
    state: {
      offer,
      offerRating,
      offerReviews
    }
  };
  return (
    <article className="cities__place-card place-card" onMouseEnter={() => (onMouseEnter(offer.property))} onMouseLeave={onMouseLeave}>
      {offer.facilities.premium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerLinkProps}>
          <img className="place-card__image" src={offer.photo[0]} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.main.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offerRating * RATING_BAR_DIVISION}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLinkProps}>{offer.slogan}</Link>
        </h2>
        <p className="place-card__type">{offer.main.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropTypes,
  offerReviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default OfferCard;