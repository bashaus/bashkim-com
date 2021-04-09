import { Properties as CSSProperties } from "csstype";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./styles.module.scss";

type DeferredAssetProps = {
  children: JSX.Element;
  width?: number;
  height?: number;
  ratio?: number;
};

const DeferredAsset = ({
  children,
  width,
  height,
  ratio,
}: DeferredAssetProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (_isVisible: boolean): void => {
    if (!isVisible && _isVisible) {
      setIsVisible(true);
    }
  };

  if (isVisible) {
    return children;
  }

  let ratioValue = 1;

  if (ratio) {
    ratioValue = ratio;
  } else if (width && height) {
    ratioValue = height / width;
  }

  const style: CSSProperties = {
    paddingBottom: `${ratioValue * 100}%`,
  };

  if (width) {
    style.maxWidth = `${width}`;
  }

  return (
    <VisibilitySensor partialVisibility onChange={handleVisibilityChange}>
      <div className={styles.DeferredAsset} style={style} />
    </VisibilitySensor>
  );
};

export default DeferredAsset;
