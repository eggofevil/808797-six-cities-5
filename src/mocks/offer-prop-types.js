import PropTypes from 'prop-types';

export default PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  propertyId: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  property: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  hostAvatar: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  photo: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  main: PropTypes.shape({
    address: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  facilities: PropTypes.shape({
    premium: PropTypes.bool.isRequired,
    capacity: PropTypes.shape({
      adults: PropTypes.number.isRequired,
      children: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
}).isRequired;
