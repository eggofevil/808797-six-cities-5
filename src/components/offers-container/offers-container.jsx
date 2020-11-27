import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import withSortingType from '../../hocs/with-sorting-type';
import withOffersList from '../../hocs/with-offers-list';

import SortingType from '../sorting-type/sorting-type';
import OffersList from '../offers-list/offers-list';
import CityMap from '../city-map/city-map';

import offerPropTypes from '../../mocks/offer-prop-types';

const ExtendedSortingType = withSortingType(SortingType);
const ExtendedOffersList = withOffersList(OffersList);

const OffersContainer = ({cityOffers, city, sortingType}) => {
  return (
    <div className="cities">
      {cityOffers.length > 0 ?
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cityOffers.length} places to stay in {city}</b>
            <ExtendedSortingType />
            <ExtendedOffersList cityOffers={cityOffers} sortingType={sortingType} />
          </section>
          <div className="cities__right-section">
            <CityMap
              mapClassName="cities"
              cityOffers={cityOffers}
            />
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
  );
};

OffersContainer.propTypes = {
  city: PropTypes.string.isRequired,
  cityOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  sortingType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({cityOffers: state.cityOffers, sortingType: state.sortingType});

export {OffersContainer};
export default connect(mapStateToProps)(OffersContainer);
