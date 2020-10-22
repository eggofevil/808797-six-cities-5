import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  hostAvatar: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  photo: PropTypes.arrayOf(PropTypes.string).isRequired,
  main: PropTypes.shape({
    address: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  facilities: PropTypes.shape({
    premium: PropTypes.bool.isRequired,
    bedrooms: PropTypes.number.isRequired,
    capacity: PropTypes.shape({
      adults: PropTypes.number.isRequired,
      children: PropTypes.number.isRequired
    }).isRequired,
    amentities: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
}).isRequired;
