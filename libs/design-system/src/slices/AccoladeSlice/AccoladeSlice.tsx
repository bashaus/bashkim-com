import type { Case_StudyAccoladesAccoladeslicetype } from "@bashkim-com/prismic-dal";
import {
  PrismicDate,
  PrismicRichText,
  useLinkResolver,
} from "@bashkim-com/prismic-helpers";
import { Link } from "prismic-reactjs";

import { DateFormatter } from "../../formatters/DateFormatter/DateFormatter";
import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import * as S from "./AccoladeSlice.styles";

export type AccoladeSliceProps = {
  slice: Case_StudyAccoladesAccoladeslicetype;
};

const AwardPlaceName: Record<string, string> = {
  gold: "Gold",
  silver: "Silver",
  bronze: "Bronze",
  honour: "Honour",
  shortlist: "Shortlist",
};

export const AccoladeSlice = ({ slice }: AccoladeSliceProps) => {
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
    <S.AccoladeSlice>
      <S.Details>
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
      </S.Details>

      <S.Awards>
        {slice.fields?.map((field, i) => {
          const {
            accolade_slice_type_award_place: awardPlace,
            accolade_slice_type_award_link: awardLink,
            accolade_slice_type_award_category: awardCategory,
          } = field;

          const awardHref = Link.url(awardLink, PrismicLinkResolver);

          return (
            <S.Award key={i} data-prop-place={awardPlace}>
              <a href={awardHref} target="_blank" rel="noreferrer">
                <S.Trophy />
                <RichTextFormatter>
                  {awardPlace && <h3>{AwardPlaceName[awardPlace]}</h3>}
                  <PrismicRichText render={awardCategory} />
                </RichTextFormatter>
              </a>
            </S.Award>
          );
        })}
      </S.Awards>
    </S.AccoladeSlice>
  );
};
