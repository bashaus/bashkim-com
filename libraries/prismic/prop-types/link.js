import PropTypes from 'prop-types';

export default PropTypes.shape({
  link_type: PropTypes.oneOf(['Any', 'Web']).isRequired,
  url: PropTypes.string,
});
