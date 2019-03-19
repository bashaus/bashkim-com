import PropTypes from 'prop-types';

export default function RichTextPrismicPropType(types) {
  return PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(types),
      text: PropTypes.string.isRequired,
      spans: PropTypes.array.isRequired,
    }),
  );
}
