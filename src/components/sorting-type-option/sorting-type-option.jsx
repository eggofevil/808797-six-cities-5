import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeSortingType} from '../../store/actions';

const mapStateToProps = (state) => ({sortingType: state.sorting.type});

const mapDispatchToProps = (dispatch, sortingType) => ({
  changeSortingType: dispatch(changeSortingType(sortingType))
});
