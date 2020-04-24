import React from 'react';

import styles from './styles.module.scss';

interface CallToActionProps {
  children: React.ReactNode;
}

const CallToAction = ({ children }: CallToActionProps): JSX.Element => (
  <div className={styles.CallToAction}>{children}</div>
);

export default CallToAction;
