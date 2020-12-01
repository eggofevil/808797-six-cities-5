import React from 'react';
import PropTypes from 'prop-types';

import CityTab from '../city-tab/city-tab.jsx';

const CitiesList = ({cities, currentCity}) => {
  const elementClassName = `locations__item-link tabs__item`;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, id) => {
            return (
              <CityTab key={`city-${id}`} name={city} tabClassName={city === currentCity ? elementClassName + ` tabs__item--active` : elementClassName}/>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default CitiesList;
