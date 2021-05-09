import styles from "./styles.module.scss";

export const ComponentDecorator = (storyFn: Function): JSX.Element => (
  <div className={styles.ComponentDecorator}>
    {storyFn()}
  </div>
);
