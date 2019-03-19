import { Link } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import React from 'react';

import LinkResolver from '%prismic/helpers/LinkResolver';

import SlicePropType from './prop-type';

export default function CollaboratorSliceType(props) {
  const { slice, peer } = props;

  const {
    CollaboratorSliceType_Company: company,
    CollaboratorSliceType_Role: role,
  } = slice.primary;

  const {
    peer_name: name,
    peer_website: website,
  } = peer.data;

  const url = Link.url(website, LinkResolver);

  return (
    <li>
      <strong>
        { url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            { name }
          </a>
        ) }

        { !url && (
          <>
            { name }
          </>
        ) }
      </strong>

      { company && (
        <>
          <br />
          { company }
        </>
      ) }

      <br />
      { role }
    </li>
  );
}

CollaboratorSliceType.propTypes = {
  slice: SlicePropType.isRequired,
  peer: PropTypes.object.isRequired,
};
