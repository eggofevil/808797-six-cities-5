import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {changeSortingType} from '../../store/actions';

import offerPropTypes from '../../mocks/offer-prop-types';

const SortingTypeOption = ({value, active, handleClick, setSortingType, offers}) => {
  const liClassName = active ? `places__option places__option--active` : `places__option`;
  const sortingTypeOptionHandleClick = (sortingType) => {
    handleClick();
    setSortingType(sortingType, offers);
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
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

const mapStateToProps = (state) => ({offers: state.cityOffers});
const mapDispatchToProps = (dispatch) => ({
  setSortingType(sortingType, currentOffers) {
    dispatch(changeSortingType(sortingType, currentOffers));
  }
});

export {SortingTypeOption};
export default connect(mapStateToProps, mapDispatchToProps)(SortingTypeOption);
