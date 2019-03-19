import { RichText, Link } from 'prismic-reactjs';
import React from 'react';
import dayjs from 'dayjs';

import LinkResolver from '%prismic/helpers/LinkResolver';

import TrophyImage from '%public/static/vectors/icons/trophy.svg';

import PropType from './prop-type';
import styles from './styles.scss';

export default function AccoladeSliceType(props) {
  const { slice } = props;

  const {
    AccoladeSliceType_Issuer: issuer,
    AccoladeSliceType_Description: description,
    AccoladeSliceType_Date: date,
  } = slice.primary;

  return (
    <div className={styles.AccoladeSliceType} key={issuer}>
      <div className={styles.accoladeDetails}>
        { issuer && RichText.render(issuer, LinkResolver) }
        { description && RichText.render(description, LinkResolver) }
        <p>
          <small>{dayjs(date).format('MMMM YYYY')}</small>
        </p>
      </div>

      <ol className={styles.awards}>
        { slice.items.map((award, i) => {
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
                <TrophyImage className={`${styles.trophy} ${styles[awardPlace]}`} />
                { awardCategory && RichText.render(awardCategory, LinkResolver) }
              </a>
            </li>
          );
        }) }
      </ol>
    </div>
  );
}

AccoladeSliceType.propTypes = {
  slice: PropType.isRequired,
};
