import type { AccoladeSliceTypeFragment } from "@bashkim-com/prismic-dal";
import {
  PrismicDate,
  PrismicRichText,
  useLinkResolver,
} from "@bashkim-com/prismic-helpers";
import { Link } from "prismic-reactjs";

import TrophyVector from "../../assets/vectors/trophy.svg";
import DateFormatter from "../../formatters/DateFormatter";
import RichTextFormatter from "../../formatters/RichTextFormatter";
import styles from "./styles.module.scss";

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
        {slice.fields?.map((field) => {
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
              key={JSON.stringify(field)}
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
}
