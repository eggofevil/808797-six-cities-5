import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import offerPropTypes from '../../mocks/offer-prop-types';

class OffersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  _handleMouseEnter(offerProperty) {
    this.setState({activeCard: offerProperty});
  }
  _handleMouseLeave() {
    this.setState({activeCard: null});
  }

  render() {
    if (this.props.offers.length > 0) {
      return (
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">4 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
              {/*
            <select class="places__sorting-type" id="places-sorting">
              <option class="places__option" value="popular" selected="">Popular</option>
              <option class="places__option" value="to-high">Price: low to high</option>
              <option class="places__option" value="to-low">Price: high to low</option>
              <option class="places__option" value="top-rated">Top rated first</option>
            </select>
            */}
            </form>
            <div className="cities__places-list places__list tabs__content">
              {this.props.offers.map((offer, i) => (
                <OfferCard key={`offer-${i}`} offer={offer} onMouseEnter={this._handleMouseEnter} onMouseLeave={this._handleMouseLeave}/>
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map" />
          </div>
        </div>
      );
    }
    return (
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
          </div>
        </section>
        <div className="cities__right-section" />
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default OffersList;
