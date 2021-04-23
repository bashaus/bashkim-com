import { Link } from "prismic-reactjs";
import type { CollaboratorSliceType } from "@bashkim-com/prismic";

import { PrismicLinkResolver } from "%prismic/helpers/Link";

type CollaboratorSliceProps = {
  slice: CollaboratorSliceType;
};

const CollaboratorSlice = ({ slice }: CollaboratorSliceProps): JSX.Element => {
  const {
    collaborator_slice_type_company: company,
    collaborator_slice_type_role: role,
    collaborator_slice_type_peer: { peer_name: name, peer_website: website },
  } = slice.primary;

  const url = Link.url(website, PrismicLinkResolver);

  return (
    <li>
      <strong>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        )}

        {!url && <>{name}</>}
      </strong>

      {company && (
        <>
          <br />
          {company}
        </>
      )}

      <br />
      {role}
    </li>
  );
};

export default CollaboratorSlice;
