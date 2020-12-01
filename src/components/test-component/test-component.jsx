import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {changeCity} from '../../store/actions';
import NewTestComponent from './new-test-component';

const mapStateToProps = (state) => ({city: state.city.name});
const mapDispatchToProps = (dispatch) => ({
  someAction(city) {
    dispatch(changeCity(city));
  }
});

const TestComponent = ({city, someAction}) => {
  return (
    <div>
      <p>Hello world!!!</p>
      <p>{city}</p>
      <button onClick={() => someAction(`Brussels`)}>changeCity</button>
      <p>Test component</p>
      <NewTestComponent testdata="testdata"/>
    </div>
  );
};

TestComponent.propTypes = {
  city: PropTypes.string.isRequired,
  someAction: PropTypes.func.isRequired
};

export {TestComponent};
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
