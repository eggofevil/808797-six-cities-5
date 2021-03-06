import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {changeActiveCard} from '../../store/actions';
import {RATING_BAR_DIVISION} from '../../const';

import offerPropTypes from '../../mocks/offer-prop-types';
import reviewPropTypes from '../../mocks/review-prop-types';

const OfferCard = ({offerCardArticleClassName, offerCardDivClassName, offer, cityOffers, reviews, setActiveCard}) => {
  const offerLinkProps = {
    pathname: `/offer${offer.id}`,
    state: {
      offer,
      cityOffers,
      reviews
    }
  };

  const handleMouseEnter = () => {
    setActiveCard(offer.id);
  };

  const handleMouseLeave = () => {
    setActiveCard();
  };

  return (
    <article className={`place-card ` + offerCardArticleClassName} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {offer[`is_premium`] ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={`place-card__image-wrapper ` + offerCardDivClassName}>
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
            <span style={{width: `${Math.round(offer.rating) * RATING_BAR_DIVISION}%`}} />
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
  offerCardArticleClassName: PropTypes.string.isRequired,
  offerCardDivClassName: PropTypes.string.isRequired,
  offer: offerPropTypes.isRequired,
  cityOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  setActiveCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({cityOffers: state.cityOffers, reviews: state.reviews});

const mapDispatchToProps = (dispatch) => ({
  setActiveCard(offerId) {
    dispatch(changeActiveCard(offerId));
  }
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
