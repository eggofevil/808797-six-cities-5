import React from 'react';
import PropTypes from 'prop-types';

function withOffersList(Component) {
  return class WithOffersList extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const {cityOffers} = this.props;
      return (
        <div className="cities">
          {cityOffers.length > 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {city}</b>
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
    }
  };
}

export default withOffersList;
