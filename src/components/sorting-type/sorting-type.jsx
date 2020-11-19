import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// import SortingTypeOption from '../sorting-type-option/sorting-type-option';

const SortingType = ({handleClick, ulClassName, sortingType}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleClick}>
        {sortingType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={ulClassName}>
        <li className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0}>Price: low to high</li>
        <li className="places__option" tabIndex={0}>Price: high to low</li>
        <li className="places__option" tabIndex={0}>Top rated first</li>
      </ul>
      {/*
      <select className="places__sorting-type" id="places-sorting">
        <option className="places__option" value="popular" selected="">Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
      </select>
      */}
    </form>
  );
};

const mapStateToProps = (state) => ({sortingType: state.sortingType});

SortingType.propTypes = {
  handleClick: PropTypes.func.isRequired,
  ulClassName: PropTypes.string.isRequired,
  sortingType: PropTypes.string.isRequired
};

export {SortingType};
export default connect(mapStateToProps)(SortingType);
