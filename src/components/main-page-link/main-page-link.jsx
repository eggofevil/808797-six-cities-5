import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {resetOffer} from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  handleClick() {
    dispatch(resetOffer());
  }
});

const MainPageLink = ({handleClick}) =>
  <Link className="header__logo-link" to="/" onClick={handleClick}>
    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
  </Link>
  ;

MainPageLink.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export {MainPageLink};
export default connect(null, mapDispatchToProps)(MainPageLink);
