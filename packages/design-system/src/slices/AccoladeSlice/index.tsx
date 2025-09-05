import { useLinkResolver } from "@bashkim-com/design-system/LinkResolver";
import RichTextFormatter from "@bashkim-com/design-system/RichTextFormatter";
import type { AccoladeSliceTypeFragment } from "@bashkim-com/prismic-dal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import { asLink, LinkField } from "@prismicio/client";

import DateFormatter from "../../formatters/DateFormatter";
import * as S from "./styles";

export type AccoladeSliceProps = Readonly<{
  slice: AccoladeSliceTypeFragment;
}>;

const AwardPlaceName: Record<string, string> = {
  gold: "Gold",
  silver: "Silver",
  bronze: "Bronze",
  honour: "Honour",
  shortlist: "Shortlist",
};

export default function AccoladeSlice({ slice }: AccoladeSliceProps) {
  const linkResolver = useLinkResolver();

  if (!slice.primary) {
    return null;
  }

  const {
    accolade_slice_type_issuer: issuer,
    accolade_slice_type_description: description,
    accolade_slice_type_date: date,
  } = slice.primary;

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
          <RichTextFormatter field={issuer} />
          <RichTextFormatter field={description} />
          {date && (
            <Typography fontSize="small">
              <DateFormatter date={date} />
            </Typography>
          )}
        </Grid>

        <Grid
          container
          size={{ xs: 12, sm: 12, md: 9, lg: 9, xl: 9 }}
          spacing={2}
        >
          {slice.fields?.map((field) => {
            const {
              accolade_slice_type_award_place: awardPlace,
              accolade_slice_type_award_link: awardLink,
              accolade_slice_type_award_category: awardCategory,
            } = field;

            const awardHref =
              asLink(awardLink as LinkField, { linkResolver }) ?? undefined;

            return (
              <Grid
                size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
                key={JSON.stringify(field)}
              >
                <ListItemButton
                  component="a"
                  href={awardHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box>
                    <S.Trophy place={awardPlace} />

                    {awardPlace && (
                      <Typography variant="h6" component="h4">
                        {AwardPlaceName[awardPlace]}
                      </Typography>
                    )}

                    <RichTextFormatter field={awardCategory} />
                  </Box>
                </ListItemButton>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
