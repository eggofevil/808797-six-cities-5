import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


import {changeCity} from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  handleClick(city) {
    dispatch(changeCity(city));
  }
});

const CitiesList = ({cities, currentCity, handleClick}) => {
  const elementClassName = `locations__item-link tabs__item`;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, id) => {
            return (
              <li key={`city-${id}`} className="locations__item">
                <a className={city === currentCity ? elementClassName + ` tabs__item--active` : elementClassName} onClick={() => handleClick(city)}>
                  <span>{city}</span>
                </a>
              </li>
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
  handleClick: PropTypes.func.isRequired
};

export {CitiesList};
export default connect(null, mapDispatchToProps)(CitiesList);
