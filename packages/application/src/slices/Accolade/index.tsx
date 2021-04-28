import classNames from "classnames";
import { Link } from "prismic-reactjs";

import { FormattedDate } from "@bashkim-com/design-system";
import type { AccoladeSliceType } from "@bashkim-com/prismic";

import { PrismicDate } from "%libraries/prismic/helpers/Date";
import { PrismicLinkResolver } from "%libraries/prismic/helpers/Link";
import { PrismicRichText } from "%libraries/prismic/helpers/RichText";

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
  const {
    accolade_slice_type_issuer: issuer,
    accolade_slice_type_description: description,
    accolade_slice_type_date: date,
  } = slice.primary;

  return (
    <div className={styles.AccoladeSlice}>
      <div className={styles.accoladeDetails}>
        <PrismicRichText render={issuer} />
        <PrismicRichText render={description} />
        <p>
          <small>
            <FormattedDate date={PrismicDate(date)} />
          </small>
        </p>
      </div>

      <ol className={styles.awards}>
        {slice.fields.map((field, i) => {
          const {
            accolade_slice_type_award_place: awardPlace,
            accolade_slice_type_award_link: awardLink,
            accolade_slice_type_award_category: awardCategory,
          } = field;

          const awardHref = Link.url(awardLink, PrismicLinkResolver);

          return (
            <li className={styles.award} key={i}>
              <a href={awardHref} target="_blank" rel="noopener noreferrer">
                <h3>{AwardPlaceName[awardPlace]}</h3>
                <svg className={classNames(styles.trophy, styles[awardPlace])}>
                  <IconTrophy />
                </svg>
                <PrismicRichText render={awardCategory} />
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
