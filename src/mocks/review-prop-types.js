import PropTypes from 'prop-types';

export default
PropTypes.shape({
  property: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired,
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}).isRequired;
