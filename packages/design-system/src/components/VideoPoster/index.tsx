import { ComponentPropsWithoutRef, useCallback, useState } from "react";

import { VideoModal } from "../VideoModal";
import * as S from "./styles";

export type VideoPosterProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * The title of the video, for accessibility
   */
  title?: string;

  /**
   * The URL of the image to display as a poster
   */
  imageUrl: string;

  /**
   * The URL of the video to display in a modal
   */
  videoUrl: string;
};

export const VideoPoster = ({
  title,
  imageUrl,
  videoUrl,
  ...restProps
}: VideoPosterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <S.Poster {...restProps}>
      <S.PosterImage src={imageUrl} alt={title} onClick={handleModalOpen} />
      {/* <S.PosterPlayIcon /> */}

      <VideoModal
        isOpen={isOpen}
        onRequestClose={handleModalClose}
        url={videoUrl}
      />
    </S.Poster>
  );
};
