import { useLinkResolver } from "@bashkim-com/design-system/LinkResolver";
import {
  CollaboratorSliceTypeFragment,
  isPeer,
} from "@bashkim-com/prismic-dal";
import MuiLink from "@mui/material/Link";
import ListItemText from "@mui/material/ListItemText";
import { asLink, LinkField } from "@prismicio/client";

export type CollaboratorSliceProps = Readonly<{
  slice: CollaboratorSliceTypeFragment;
}>;

export default function CollaboratorSlice({ slice }: CollaboratorSliceProps) {
  const linkResolver = useLinkResolver();

  const { primary } = slice;
  if (!primary) {
    return null;
  }

  const {
    collaborator_slice_type_company: company,
    collaborator_slice_type_role: role,
    collaborator_slice_type_peer: peer,
  } = primary;

  if (!isPeer(peer)) {
    return null;
  }

  const { peer_name: name, peer_website: website } = peer;
  const url = asLink(website as LinkField, { linkResolver }) ?? undefined;

  return (
    <ListItemText
      primary={
        <>
          {!url && <>{name}</>}
          {!!url && (
            <MuiLink href={url} target="_blank" rel="noreferrer noopener">
              {name}
            </MuiLink>
          )}
        </>
      }
      secondary={
        <>
          {!!company && (
            <>
              {company}
              <br />
              {role}
            </>
          )}
          {!company && <>{role}</>}
        </>
      }
    />
  );
}
