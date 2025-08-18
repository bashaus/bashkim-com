import { MediaProvider } from "media-chrome/react/media-store";
import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useState,
} from "react";

import VideoDialog from "../VideoDialog/load";

export type VideoPlayerLinkProps = Readonly<
  PropsWithChildren<{
    /**
     * The URL of the video to display in a dialog
     */
    videoUrl: string;

    /**
     * The title or description of the video
     */
    title?: ReactNode;
  }>
>;

export default function VideoPlayerLink({
  children,
  videoUrl,
}: VideoPlayerLinkProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleDialogOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setOpen(false);
  }, []);

  const child = Children.only(children);
  const signifier = isValidElement<{ onClick: () => void }>(child)
    ? cloneElement(child, { onClick: handleDialogOpen })
    : null;

  return (
    <>
      {signifier}
      <MediaProvider>
        <VideoDialog open={open} onClose={handleDialogClose} url={videoUrl} />
      </MediaProvider>
    </>
  );
}
