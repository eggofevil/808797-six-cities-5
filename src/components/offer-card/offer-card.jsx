import React from 'react';
import PropTypes from 'prop-types';
// TODO: Возможно следует изменить структуру моковых данных так чтобы в общем списке данных выделялся список данных для карточки предложения.

const OfferCard = ({offer, onMouseEnter, onMouseLeave}) => (
  <article className="cities__place-card place-card" onMouseEnter={() => (onMouseEnter(offer.property))} onMouseLeave={onMouseLeave}>
    {offer.facilities.premium ? (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    ) : null}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={offer.photo[0]} width={260} height={200} alt="Place image" />
      </a>
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
          <span style={{width: `80%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{offer.description}</a>
      </h2>
      <p className="place-card__type">{offer.main.type}</p>
    </div>
  </article>
);

OfferCard.propTypes = {
  offer: PropTypes.shape({
    property: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.array.isRequired,
    main: PropTypes.shape({
      address: PropTypes.string.isRequired,
      coords: PropTypes.array.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired,
    facilities: PropTypes.shape({
      amentities: PropTypes.array.isRequired,
      bedrooms: PropTypes.number.isRequired,
      capacity: PropTypes.shape({
        adults: PropTypes.number.isRequired,
        children: PropTypes.number.isRequired
      }).isRequired,
      premium: PropTypes.bool.isRequired
    }).isRequired,
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default OfferCard;
