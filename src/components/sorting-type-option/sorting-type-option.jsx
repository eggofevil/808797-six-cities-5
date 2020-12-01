import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {changeSortingType} from '../../store/reducers/app-logic/app-logic-actions';

const SortingTypeOption = ({value, active, handleClick, setSortingType}) => {
  const liClassName = active ? `places__option places__option--active` : `places__option`;
  const sortingTypeOptionHandleClick = (sortingType) => {
    handleClick();
    setSortingType(sortingType);
  };
  return (
    <li className={liClassName} tabIndex={0} onClick={() => sortingTypeOptionHandleClick(value)}>{value}</li>
  );
};

SortingTypeOption.propTypes = {
  value: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  setSortingType: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setSortingType(sortingType) {
    dispatch(changeSortingType(sortingType));
  }
});

export {SortingTypeOption};
export default connect(null, mapDispatchToProps)(SortingTypeOption);
