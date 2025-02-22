import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";

import VideoDialog from "../VideoDialog";

export type VideoPlayerLinkProps = Readonly<
  PropsWithChildren<{
    /**
     * The URL of the video to display in a dialog
     */
    videoUrl: string;
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
      <VideoDialog open={open} onClose={handleDialogClose} url={videoUrl} />
    </>
  );
}
