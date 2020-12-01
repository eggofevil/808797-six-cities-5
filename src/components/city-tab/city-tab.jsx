import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {changeCity} from '../../store/reducers/app-data/app-data-actions';

const CityTab = ({name, tabClassName, setCity}) => {
  const handleClick = () => {
    setCity(name);
  };
  return (
    <li className="locations__item">
      <a className={tabClassName} onClick={handleClick}>
        <span>{name}</span>
      </a>
    </li>
  );
};

CityTab.propTypes = {
  name: PropTypes.string.isRequired,
  tabClassName: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(changeCity(city));
  }
});

export {CityTab};
export default connect(null, mapDispatchToProps)(CityTab);
