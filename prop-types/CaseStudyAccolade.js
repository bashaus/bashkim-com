import PropTypes from 'prop-types';

export default PropTypes.shape({
  issuer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  awards: PropTypes.arrayOf(PropTypes.shape({
    place: PropTypes.oneOf([
      'gold', 'silver', 'bronze', 'shortlist', 'honour',
    ]),
    href: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
});
