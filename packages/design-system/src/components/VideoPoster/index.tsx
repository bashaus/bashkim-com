import { ComponentPropsWithoutRef, useCallback, useState } from "react";

import VideoDialog from "../VideoDialog";
import styles from "./styles.module.scss";

export type VideoPosterProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    /**
     * The title of the video, for accessibility
     */
    title?: string;

    /**
     * The URL of the image to display as a poster
     */
    imageUrl: string;

    /**
     * Dimensions: width
     */
    width?: number;

    /**
     * Dimensions: height
     */
    height?: number;

    /**
     * The URL of the video to display in a dialog
     */
    videoUrl: string;
  }
>;

export default function VideoPoster({
  title,
  imageUrl,
  width,
  height,
  videoUrl,
  ...restProps
}: VideoPosterProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDialogOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div {...restProps}>
      <img
        className={styles["PosterImage"]}
        src={imageUrl}
        alt={title}
        width={width && height ? width : undefined}
        height={width && height ? height : undefined}
        onClick={handleDialogOpen}
        onKeyUp={handleDialogOpen}
      />

      <VideoDialog open={isOpen} onClose={handleDialogClose} url={videoUrl} />
    </div>
  );
}
