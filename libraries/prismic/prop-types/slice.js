import PropTypes from 'prop-types';

export default PropTypes.shape({
  slice_type: PropTypes.string.isRequired,
  slice_label: PropTypes.string,
});
