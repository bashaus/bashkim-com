import PropTypes from 'prop-types';

export default PropTypes.shape({
  caseStudy: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  kernels: PropTypes.arrayOf(PropTypes.string).isRequired,
});
