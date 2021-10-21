import { DateFormatter, RichTextFormatter } from "@bashkim-com/design-system";
import {
  AccoladeSliceType,
  LinkResolverContext,
  PrismicDate,
  PrismicRichText,
} from "@bashkim-com/prismic";
import { Link } from "prismic-reactjs";
import { useContext } from "react";

import IconTrophy from "%public/static/vectors/icons/trophy.svg";

import styles from "./styles.module.scss";

export type AccoladeSliceProps = {
  slice: AccoladeSliceType;
};

const AwardPlaceName = {
  gold: "Gold",
  silver: "Silver",
  bronze: "Bronze",
  honour: "Honour",
  shortlist: "Shortlist",
};

export const AccoladeSlice = ({ slice }: AccoladeSliceProps): JSX.Element => {
  const PrismicLinkResolver = useContext(LinkResolverContext);
  const {
    accolade_slice_type_issuer: issuer,
    accolade_slice_type_description: description,
    accolade_slice_type_date: date,
  } = slice.primary;

  return (
    <div className={styles.AccoladeSlice}>
      <RichTextFormatter className={styles.Details}>
        <PrismicRichText render={issuer} />
        <PrismicRichText render={description} />
        <p>
          <small>
            <DateFormatter date={PrismicDate(date)} />
          </small>
        </p>
      </RichTextFormatter>

      <div className={styles.Awards}>
        {slice.fields.map((field, i) => {
          const {
            accolade_slice_type_award_place: awardPlace,
            accolade_slice_type_award_link: awardLink,
            accolade_slice_type_award_category: awardCategory,
          } = field;

          const awardHref = Link.url(awardLink, PrismicLinkResolver);

          return (
            <div className={styles.Award} key={i} data-prop-place={awardPlace}>
              <a href={awardHref} target="_blank" rel="noreferrer">
                <IconTrophy className={styles.Trophy} />
                <RichTextFormatter>
                  <h3>{AwardPlaceName[awardPlace]}</h3>
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
