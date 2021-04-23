import classNames from "classnames";
import { Link } from "prismic-reactjs";
import dayjs from "dayjs";

import type { AccoladeSliceType } from "@bashkim-com/prismic";

import { PrismicLinkResolver } from "%prismic/helpers/Link";
import { PrismicRichText } from "%prismic/helpers/RichText";

import IconTrophy from "%public/static/vectors/icons/trophy.svg";

import styles from "./styles.module.scss";

type AccoladeSliceProps = {
  slice: AccoladeSliceType;
};

const AccoladeSlice = ({ slice }: AccoladeSliceProps): JSX.Element => {
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
          <small>{dayjs(date).format("MMMM YYYY")}</small>
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
                <h3>{awardPlace}</h3>
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

export default AccoladeSlice;
