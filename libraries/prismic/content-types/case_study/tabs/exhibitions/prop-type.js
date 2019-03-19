import PropTypes from 'prop-types';

import ExhibitionSlicePropType from '%prismic/slice-types/Exhibition/prop-type';

export default {
  exhibitions: PropTypes.arrayOf(
    ExhibitionSlicePropType,
  ),
};
