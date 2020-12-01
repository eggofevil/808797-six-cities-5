import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import withSortingType from '../../hocs/with-sorting-type';

import SortingType from '../sorting-type/sorting-type';
import OffersList from '../offers-list/offers-list';
import CityMap from '../city-map/city-map';

import {sortCityOffers} from '../../store/data-operations';

import offerPropTypes from '../../mocks/offer-prop-types';

const ExtendedSortingType = withSortingType(SortingType);

const OffersContainer = ({cityOffers, sortingType}) => {
  const city = cityOffers[0].city;
  cityOffers = sortCityOffers(sortingType, cityOffers);
  return (
    <div className="cities">
      {cityOffers.length > 0 ?
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
            <ExtendedSortingType />
            <OffersList
              offersListClassName="cities__places-list tabs__content"
              offerCardArticleClassName="cities__place-card"
              offerCardDivClassName="cities__image-wrapper"
              cityOffers={cityOffers}
            />
          </section>
          <div className="cities__right-section">
            <CityMap
              mapClassName="cities"
              location={city.location}
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
  cityOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  sortingType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({cityOffers: state.cityOffers, sortingType: state.sortingType});

export {OffersContainer};
export default connect(mapStateToProps)(OffersContainer);
