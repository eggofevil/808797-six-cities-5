import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {RATING_BAR_DIVISION} from '../../const';

import offerPropTypes from '../../mocks/offer-prop-types';
import reviewPropTypes from '../../mocks/review-prop-types';

const OfferCard = ({offer, onMouseEnter, onMouseLeave, offerReviews, parent}) => {
  let offerLinkProps = {
    pathname: `/offer${offer.id}`,
    state: {
      offer,
      offerReviews,
    }
  };
  let offerCardArticleClassName = parent === `main` ? `cities__place-card place-card` : `near-places__card place-card`;
  let offerCardDivClassName = parent === `main` ? `cities__image-wrapper place-card__image-wrapper` : `near-places__image-wrapper place-card__image-wrapper`;
  return (
    <article className={offerCardArticleClassName} onMouseEnter={() => (onMouseEnter(offer.property))} onMouseLeave={onMouseLeave}>
      {offer[`is_premium`] ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={offerCardDivClassName}>
        <Link to={offerLinkProps}>
          <img className="place-card__image" src={offer[`preview_image`]} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
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
            <span style={{width: `${offer.rating * RATING_BAR_DIVISION}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLinkProps}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropTypes,
  parent: PropTypes.string.isRequired,
  offerReviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default OfferCard;
