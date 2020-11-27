import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import withSortingType from '../../hocs/with-sorting-type';
import withOffersList from '../../hocs/with-offers-list';
import SortingType from '../sorting-type/sorting-type';
import CitiesList from '../cities-list/cities-list';
import OffersList from '../offers-list/offers-list';
import UserInfo from '../user-info/user-info';
import CityMap from '../city-map/city-map';

import offerPropTypes from '../../mocks/offer-prop-types';

const ExtendedSortingType = withSortingType(SortingType);
const ExtendedOffersList = withOffersList(OffersList);

const Main = ({cities, city, cityOffers}) => {
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={cities} currentCity={city} />
        <ExtendedOffersList />
      </main>
    </div>
  );
};

Main.propTypes = {
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  cityOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
};

const mapStateToProps = (state) => ({city: state.city.name, cityOffers: state.cityOffers});

export {Main};
export default connect(mapStateToProps)(Main);
