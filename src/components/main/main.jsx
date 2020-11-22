import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import withSortingType from '../../hocs/with-sorting-type';
import SortingType from '../sorting-type/sorting-type';
import CitiesList from '../cities-list/cities-list';
import OffersList from '../offers-list/offers-list';
import UserInfo from '../user-info/user-info';
import CityMap from '../city-map/city-map';

import offerPropTypes from '../../mocks/offer-prop-types';
import reviewPropTypes from '../../mocks/review-prop-types';

const ExtendedSortingType = withSortingType(SortingType);

const mapStateToProps = (state) => ({city: state.city.name, offers: state.cityOffers, reviews: state.reviews});

const Main = ({cities, city, offers, reviews}) => {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
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
      <main className={offers.length > 0 ? `page__main page__main--index` : `page__main page__main--index page__main--index-empty`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={cities} currentCity={city} />
        <div className="cities">
          {offers.length > 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city}</b>
                <ExtendedSortingType />
                <div className="cities__places-list places__list tabs__content">
                  <OffersList
                    offers={offers}
                    reviews={reviews}
                    parent="main"
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <CityMap parent="cities" offers={offers} />
              </div>
            </div>
            :
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section" />
            </div>
          }
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired
};

export {Main};
export default connect(mapStateToProps)(Main);
