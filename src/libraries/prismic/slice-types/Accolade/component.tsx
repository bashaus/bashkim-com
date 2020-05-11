import classNames from "classnames";
import { RichText, Link } from "prismic-reactjs";
import React from "react";
import dayjs from "dayjs";

import LinkResolver from "%prismic/helpers/LinkResolver";

import TrophyImage from "%public/static/vectors/icons/trophy.svg";

import SlicePropType from "./type";
import styles from "./styles.module.scss";

interface AccoladeSliceTypeProps {
  slice: SlicePropType;
}

const AccoladeSliceType = ({ slice }: AccoladeSliceTypeProps): JSX.Element => {
  const {
    AccoladeSliceType_Issuer: issuer,
    AccoladeSliceType_Description: description,
    AccoladeSliceType_Date: date,
  } = slice.primary;

  return (
    <div className={styles.AccoladeSliceType}>
      <div className={styles.accoladeDetails}>
        {issuer && RichText.render(issuer, LinkResolver)}
        {description && RichText.render(description, LinkResolver)}
        <p>
          <small>{dayjs(date).format("MMMM YYYY")}</small>
        </p>
      </div>

      <ol className={styles.awards}>
        {slice.items.map((award, i) => {
          const {
            AccoladeSliceType_AwardPlace: awardPlace,
            AccoladeSliceType_AwardLink: awardLink,
            AccoladeSliceType_AwardCategory: awardCategory,
          } = award;

          const awardHref = Link.url(awardLink, LinkResolver);

          return (
            <li className={styles.award} key={i}>
              <a href={awardHref} target="_blank" rel="noopener noreferrer">
                <h3>{awardPlace}</h3>
                <svg className={classNames(styles.trophy, styles[awardPlace])}>
                  <TrophyImage />
                </svg>
                {awardCategory && RichText.render(awardCategory, LinkResolver)}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default AccoladeSliceType;
