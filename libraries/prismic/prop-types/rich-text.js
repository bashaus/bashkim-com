import PropTypes from 'prop-types';

const RichTextPrismicPropType = (types) => (
  PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(types),
      text: PropTypes.string.isRequired,
      spans: PropTypes.array.isRequired,
    }),
  )
);

export default RichTextPrismicPropType;
