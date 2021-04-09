import { Properties as CSSProperties } from "csstype";

import styles from "./style.module.scss";

type PartialSplitItemProps = {
  backgroundImage?: string;
  children?: React.ReactNode;
};

const PartialSplitItem = ({
  backgroundImage,
  children,
}: PartialSplitItemProps): JSX.Element => {
  const style: CSSProperties = {};
  const className = [styles.PartialSplitItem];

  if (backgroundImage) {
    style.backgroundImage = `url("${backgroundImage}")`;
    className.push(styles.background);
    className.push("PartialSplit_chevron");
  } else {
    className.push(styles.foreground);
  }

  return (
    <div className={className.join(" ")} style={style}>
      {children}
    </div>
  );
};

export default PartialSplitItem;
