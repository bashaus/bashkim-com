import styles from "./styles.module.scss";

const ComponentDecorator = (storyFn: Function): JSX.Element => {
  return <div className={styles.ComponentDecorator}>{storyFn()}</div>;
};

export default ComponentDecorator;
