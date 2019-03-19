import PropTypes from 'prop-types';

import CollaboratorSlicePropType from '%prismic/slice-types/Collaborator/prop-type';

export default {
  collaborators: PropTypes.arrayOf(
    CollaboratorSlicePropType,
  ),
};
