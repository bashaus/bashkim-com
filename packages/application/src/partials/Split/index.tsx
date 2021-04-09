import PartialSplitItem from "%partials/Split.Item";

import styles from "./styles.module.scss";

type PartialSplitProps = {
  index?: number;
  children?: React.ReactNode;
};

const PartialSplit = ({
  children,
  index = 0,
}: PartialSplitProps): JSX.Element => {
  const className = [
    styles.PartialSplit,
    index % 2 === 1 ? styles.odd : styles.even,
  ].join(" ");

  return <div className={className}>{children}</div>;
};

PartialSplit.Item = PartialSplitItem;

export default PartialSplit;
