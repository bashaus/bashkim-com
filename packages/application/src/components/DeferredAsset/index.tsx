import { CSSProperties, ReactNode, useCallback, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import * as S from "./styles";

export type DeferredAssetProps = {
  children: ReactNode;
  width?: number;
  height?: number;
  ratio?: number;
};

export const DeferredAsset = ({
  children,
  width,
  height,
  ratio,
}: DeferredAssetProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = useCallback(
    (newVisible: boolean): void => {
      if (!isVisible && newVisible) {
        setIsVisible(true);
      }
    },
    [isVisible]
  );

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
      <S.DeferredAsset style={style} />
    </VisibilitySensor>
  );
};
