import PropTypes from 'prop-types';
import ImagePropType from '%prismic/prop-types/image';

export default {
  featured_case_studies: PropTypes.arrayOf(
    PropTypes.shape({
      featured_case_study: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        slug: PropTypes.string.isRequired,
        lang: PropTypes.string.isRequired,
        uid: PropTypes.string.isRequired,
        data: {
          meta_title: PropTypes.string,
          meta_description: PropTypes.string,
          image_header_desktop: ImagePropType,
          image_header_mobile: ImagePropType,
        },
        link_type: PropTypes.string,
        isBroken: PropTypes.bool,
      }),
    }),
  ),
};
