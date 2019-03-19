import PropTypes from 'prop-types';

import AccoladeSlicePropType from '%prismic/slice-types/Accolade/prop-type';

export default {
  accolades: PropTypes.arrayOf(
    AccoladeSlicePropType,
  ),
};
