import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

class OffersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {this.props.offers.map((offer, i) => (
          <OfferCard key={`offer-${i}`} offer={offer} />
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;
