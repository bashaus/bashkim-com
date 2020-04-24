import React from 'react';

import styles from './styles.module.scss';

interface PartialFullImageProps {
  children?: React.ReactNode;
}

const PartialFullImage = ({ children }: PartialFullImageProps): JSX.Element => (
  <div className={styles.PartialFullImage}>{children}</div>
);

export default PartialFullImage;
