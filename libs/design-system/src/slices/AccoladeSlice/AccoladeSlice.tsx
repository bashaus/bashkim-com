import type { Case_StudyAccoladesAccoladeslicetype } from "@bashkim-com/prismic-dal";
import {
  PrismicDate,
  PrismicRichText,
  useLinkResolver,
} from "@bashkim-com/prismic-helpers";
import { Link } from "prismic-reactjs";

import { ReactComponent as TrophyVector } from "../../assets/vectors/trophy.svg";
import { DateFormatter } from "../../formatters/DateFormatter/DateFormatter";
import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import styles from "./AccoladeSlice.module.scss";

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
    <div className={styles["AccoladeSlice"]}>
      <div className={styles["Details"]}>
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
      </div>

      <div className={styles["Awards"]}>
        {slice.fields?.map((field, i) => {
          const {
            accolade_slice_type_award_place: awardPlace,
            accolade_slice_type_award_link: awardLink,
            accolade_slice_type_award_category: awardCategory,
          } = field;

          const awardHref = Link.url(awardLink, PrismicLinkResolver);

          return (
            <div
              className={styles["Award"]}
              data-prop-place={awardPlace}
              key={i}
            >
              <a href={awardHref} target="_blank" rel="noreferrer">
                <TrophyVector className={styles["Trophy"]} />
                <RichTextFormatter>
                  {awardPlace && <h3>{AwardPlaceName[awardPlace]}</h3>}
                  <PrismicRichText render={awardCategory} />
                </RichTextFormatter>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
