import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CitiesList from '../cities-list/cities-list';
import OffersContainer from '../offers-container/offers-container';
import UserInfo from '../user-info/user-info';

const Main = ({cityName}) => {
  let mainClassName = `page__main page__main--index`;
  mainClassName = city.location ? mainClassName : mainClassName + ` page__main--index-empty`;
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
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList currentCityName={city} />
        <OffersContainer city={city} />
      </main>
    </div>
  );
};

Main.propTypes = {
  cityName: PropTypes.string.isRequired
  /*
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    name: PropTypes.string.isRequired
  }).isRequired,
  */
};

const mapStateToProps = ({DATA}) => ({city: DATA.cityName});

export {Main};
export default connect(mapStateToProps)(Main);
