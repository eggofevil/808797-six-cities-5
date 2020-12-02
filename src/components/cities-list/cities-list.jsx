import React from 'react';
import PropTypes from 'prop-types';

import CityTab from '../city-tab/city-tab.jsx';

const CitiesList = ({currentCityName}) => {
  const cityNames = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
  const elementClassName = `locations__item-link tabs__item`;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityNames.map((cityName, id) => {
            return (
              <CityTab key={`city-${id}`} cityName={cityName} tabClassName={cityName === currentCityName ? elementClassName + ` tabs__item--active` : elementClassName}/>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  currentCityName: PropTypes.string.isRequired,
};

export default CitiesList;
