import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import OffersList from '../offers-list/offers-list';
import UserInfo from '../user-info/user-info';
import MainPageLink from '../main-page-link/main-page-link';
import CityMap from '../city-map/city-map';
import {RATING_BAR_DIVISION} from '../../const';

import offerPropTypes from '../../mocks/offer-prop-types';
import reviewPropTypes from '../../mocks/review-prop-types';

// TODO: При переходе по карточке предложения положение страницы не изменяется, нужно попровить так что бы был возврат к началу

// Test component
/*
const Room = ({offers, state: {offer, offerRating, offerReviews}}) => {
  console.log(offer);
  console.log(offers);
  console.log(offerRating);
  return (
    <div className="page">
      Hello world!!!
    </div>
  );
};
*/

const mapStateToProps = (state) => ({offers: state.cityOffers, reviews: state.reviews});

const Room = ({offers, reviews, state: {offer, offerReviews, cityCoords}}) => {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <MainPageLink />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <UserInfo />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.photo.map((photo, i) => (
                <div key={`photo-${i}`} className="property__image-wrapper">
                  <img className="property__image" src={photo} alt="photo of property" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.facilities.premium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.slogan}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offer.rating * RATING_BAR_DIVISION}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.main.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  {offer.facilities.capacity.adults ? `Max ${offer.facilities.capacity.adults} adults` : null}
                  {offer.facilities.capacity.adults && offer.facilities.capacity.children ? <br></br> : null}
                  {offer.facilities.capacity.children ? `Max ${offer.facilities.capacity.children} children` : null}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.facilities.amentities.map((amentity, i) =>
                    <li key={`amentity-${i}`} className="property__inside-item">
                      {amentity}
                    </li>
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.hostAvatar} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host}
                  </span>
                </div>
                <div className="property__description">
                  {offer.description.map((string, i) =>
                    <p key={`description-string-${i}`} className="property__text">
                      {string}
                    </p>
                  )}
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{offerReviews.length}</span></h2>
                <ul className="reviews__list">
                  {offerReviews.map((review, i) => (
                    <Review key={`review-${i}`} review={review} />
                  ))}
                </ul>
                <ReviewForm propertyId={offer.propertyId}/>
              </section>
            </div>
          </div>
          <CityMap parent="property" offers={offers} cityCoords={cityCoords} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList
                offers={offers}
                reviews={reviews}
                cityCoords={cityCoords}
                parent="room"
                thisOfferId={offer.propertyId}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  state: PropTypes.shape({
    offer: offerPropTypes,
    offerReviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
    cityCoords: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired
};

export {Room};
export default connect(mapStateToProps)(Room);
