import PropTypes from 'prop-types';

export default PropTypes.shape({
  'bedrooms': PropTypes.number.isRequired,
  'city': PropTypes.shape({
    'location': PropTypes.shape({
      'latitude': PropTypes.number.isRequired,
      'longitude': PropTypes.number.isRequired,
      'zoom': PropTypes.number.isRequired
    }).isRequired,
    'name': PropTypes.string.isRequired
  }).isRequired,
  'description': PropTypes.string.isRequired,
  'goods': PropTypes.arrayOf(PropTypes.string).isRequired,
  'host': PropTypes.shape({
    'avatar_url': PropTypes.string.isRequired,
    'id': PropTypes.number.isRequired,
    'is_pro': PropTypes.bool.isRequired,
    'name': PropTypes.string.isRequired
  }).isRequired,
  'id': PropTypes.number.isRequired,
  'images': PropTypes.arrayOf(PropTypes.string).isRequired,
  'is_favorite': PropTypes.bool.isRequired,
  'is_premium': PropTypes.bool.isRequired,
  'rating': PropTypes.number.isRequired,
  'property': PropTypes.string.isRequired,
  'slogan': PropTypes.string.isRequired,
  'price': PropTypes.number.isRequired,
  'main': PropTypes.shape({
    'address': PropTypes.string.isRequired,
    'coords': PropTypes.arrayOf(PropTypes.number).isRequired,
    'type': PropTypes.string.isRequired
  }).isRequired,
  'facilities': PropTypes.shape({
    'capacity': PropTypes.shape({
      'adults': PropTypes.number.isRequired,
      'children': PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
}).isRequired;
