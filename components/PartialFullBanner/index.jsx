import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const PartialFullBanner = ({
  backgroundDesktop,
  backgroundMobile,
  children,
  id,
}) => (
  <div className={styles.PartialFullBanner} id={id}>
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>

    { backgroundDesktop && (
      <style type="text/css">
        {`
          #${id} {
            background-image: url(${backgroundDesktop});
          }
        `}
      </style>
    ) }

    { backgroundMobile && (
      <style type="text/css">
        {`
          @media screen and (max-width: 767px) {
            #${id} {
              background-image: url(${backgroundMobile});
            }
          }
        `}
      </style>
    ) }
  </div>
);

PartialFullBanner.propTypes = {
  backgroundDesktop: PropTypes.string,
  backgroundMobile: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

PartialFullBanner.defaultProps = {
  backgroundDesktop: null,
  backgroundMobile: null,
};

export default PartialFullBanner;
