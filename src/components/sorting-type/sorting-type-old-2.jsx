import React from 'react';

import SortingTypeOption from '../sorting-type-option/sorting-type-option';

class SortingType extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this._handleSortingTypeClick = this._handleSortingTypeClick.bind(this);
  }

  _handleSortingTypeClick() {
    this.setState((state) => ({active: !state.active}));
  }

  _handleOptionClick(sortingType) {
    this.props.changeSortingType(sortingType);
    this.setState({active: false});
  }

  render() {
    const ulClassName = `places__options places__options--custom${this.state.active ? ` places__options--opened` : ``}`;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0} onClick={this._handleSortingTypeClick}>
          Popular
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
  }
}

const mapStateToProps = (state) => ({sortingType: state.sorting.type});

const mapDispatchToProps = (dispatch, sortingType) => ({
  changeSortingType: dispatch(changeSortingType(sortingType))
});

export default SortingType;
