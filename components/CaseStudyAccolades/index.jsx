import PropTypes from 'prop-types';
import React from 'react';
import dayjs from 'dayjs';

import CaseStudyAccoladePropType from 'propTypes/CaseStudyAccolade';
import PartialSubtitle from 'components/PartialSubtitle';

import TrophyImage from 'static/vectors/icons/trophy.svg';

import styles from './styles.scss';

export default function CaseStudyAccolades(props) {
  const { accolades } = props;

  return (
    <React.Fragment>
      <PartialSubtitle>
        <h2>Accolades</h2>
      </PartialSubtitle>

      <div className={styles.CaseStudyAccolades}>
        { accolades.map(accolade => (
          <div className={styles.accolade} key={accolade.issuer}>
            <div className={styles.accoladeDetails}>
              <h3>{accolade.issuer}</h3>
              <p>{accolade.description}</p>
              <p>
                <small>{dayjs(accolade.date).format('MMMM YYYY')}</small>
              </p>
            </div>

            <ol className={styles.awards}>
              { accolade.awards.map(award => (
                <li className={styles.award}>
                  <a href={award.href} target="_blank" rel="noopener noreferrer">
                    <h3>{award.place}</h3>
                    <TrophyImage className={`${styles.trophy} ${styles[award.place]}`} />
                    <p>
                      {award.category.map(category => (
                        <React.Fragment key={category}>
                          {category}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </a>
                </li>
              )) }
            </ol>
          </div>
        )) }
      </div>
    </React.Fragment>
  );
}

CaseStudyAccolades.propTypes = {
  accolades: PropTypes.arrayOf(CaseStudyAccoladePropType).isRequired,
};
