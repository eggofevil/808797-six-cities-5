import PropTypes from 'prop-types';

export default
PropTypes.shape({
  property: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.arrayOf(PropTypes.string).isRequired,
  main: PropTypes.shape({
    address: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  facilities: PropTypes.shape({
    amentities: PropTypes.arrayOf(PropTypes.string).isRequired,
    bedrooms: PropTypes.number.isRequired,
    capacity: PropTypes.shape({
      adults: PropTypes.number.isRequired,
      children: PropTypes.number.isRequired
    }).isRequired,
    premium: PropTypes.bool.isRequired
  }).isRequired,
}).isRequired;
