import type { AccoladeSliceTypeFragment } from "@bashkim-com/prismic-dal";
import {
  PrismicDate,
  PrismicRichText,
  useLinkResolver,
} from "@bashkim-com/prismic-helpers";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import { Link } from "prismic-reactjs";

import DateFormatter from "../../formatters/DateFormatter";
import RichTextFormatter from "../../formatters/RichTextFormatter";
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
  const PrismicLinkResolver = useLinkResolver();

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
          <RichTextFormatter>
            <PrismicRichText render={issuer} />
            <PrismicRichText render={description} />
            {date && (
              <p>
                <small>
                  <DateFormatter date={PrismicDate(date)} />
                </small>
              </p>
            )}
          </RichTextFormatter>
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

            const awardHref = Link.url(awardLink, PrismicLinkResolver);

            return (
              <Grid
                size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
                key={JSON.stringify(field)}
                data-prop-place={awardPlace}
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

                    <RichTextFormatter>
                      <PrismicRichText render={awardCategory} />
                    </RichTextFormatter>
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
