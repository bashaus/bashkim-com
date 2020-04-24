import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const PartialHeaderImage = ({
  className, id, imageDesktop, imageMobile,
}) => (
  <header id={id} className={className}>
    { imageDesktop && (
      <style type="text/css">
        {`
          #${id} .background {
            background-image: url(${imageDesktop});
          }
        `}
      </style>
    ) }

    { imageMobile && (
      <style type="text/css">
        {`
          @media screen and (max-width: 767px) {
            #${id} .background {
              background-image: url(${imageMobile});
            }
          }
        `}
      </style>
    ) }

    <div
      className={`${styles.background} background`}
      aria-hidden="true"
    />
  </header>
);

PartialHeaderImage.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  imageDesktop: PropTypes.string,
  imageMobile: PropTypes.string,
};

PartialHeaderImage.defaultProps = {
  className: '',
  imageDesktop: null,
  imageMobile: null,
};

export default PartialHeaderImage;
