import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

export default function PartialInlineBanner(props) {
  const {
    backgroundDesktop,
    backgroundMobile,
    children,
    id,
  } = props;

  return (
    <div className={styles.PartialInlineBanner} id={id}>
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
}

PartialInlineBanner.propTypes = {
  backgroundDesktop: PropTypes.string,
  backgroundMobile: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

PartialInlineBanner.defaultProps = {
  backgroundDesktop: null,
  backgroundMobile: null,
};
