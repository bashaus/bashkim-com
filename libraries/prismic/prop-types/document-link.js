import PropTypes from 'prop-types';

const DocumentLinkPrismicPropType = (data) => (
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    slug: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    data,
    link_type: PropTypes.oneOf(['Document']).isRequired,
    isBroken: PropTypes.bool.isRequired,
  })
);

export default DocumentLinkPrismicPropType;
