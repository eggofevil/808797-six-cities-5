import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setOffer} from '../../store/actions';
import {RATING_BAR_DIVISION} from '../../const';

import offerPropTypes from '../../mocks/offer-prop-types';
import reviewPropTypes from '../../mocks/review-prop-types';

const mapDispatchToProps = (dispatch) => ({
  handleClick(offer, offerRating, offerReviews) {
    dispatch(setOffer(offer, offerRating, offerReviews));
  }
});

const OfferCard = ({offer, offerReviews, parent, handleClick}) => {
  let offerRating = (offerReviews.reduce((acc, review) => acc + review.value, 0) / offerReviews.length).toFixed(1);
  let offerLinkProps = {
    pathname: `/offer${offer.id}`,
  };
  let offerCardArticleClassName = parent === `main` ? `cities__place-card place-card` : `near-places__card place-card`;
  let offerCardDivClassName = parent === `main` ? `cities__image-wrapper place-card__image-wrapper` : `near-places__image-wrapper place-card__image-wrapper`;
  return (
    <article className={offerCardArticleClassName}>
      {offer.facilities.premium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={offerCardDivClassName}>
        <Link to={offerLinkProps} onClick={() => handleClick(offer, offerRating, offerReviews)}>
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
          <Link to={offerLinkProps} onClick={() => handleClick(offer, offerRating, offerReviews)}>{offer.slogan}</Link>
        </h2>
        <p className="place-card__type">{offer.main.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropTypes.isRequired,
  parent: PropTypes.string.isRequired,
  offerReviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  handleClick: PropTypes.func.isRequired
};

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
