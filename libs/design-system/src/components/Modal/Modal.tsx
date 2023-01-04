import { useCallback, useState } from "react";
import ReactModal, { Props as ReactModalProps } from "react-modal";

import { ModalContent } from "../ModalContent/ModalContent";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

export type ModalProps = ReactModalProps;

export const Modal = ({ isOpen, style = {}, ...props }: ModalProps) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);

  const handleOverlayShowStart = useCallback(() => {
    setIsOverlayOpen(true);
  }, []);

  const handleOverlayHideComplete = useCallback(() => {
    setIsOverlayOpen(false);
  }, []);

  const handleContentShowStart = useCallback(() => {
    setIsContentOpen(true);
  }, []);

  const handleContentHideComplete = useCallback(() => {
    setIsContentOpen(false);
  }, []);

  const shouldRender = isOpen || isOverlayOpen || isContentOpen;

  const overlayElement = useCallback(
    (
      overlayProps: React.ComponentPropsWithRef<"div">,
      contentElement: React.ReactElement
    ) => (
      <ModalOverlay
        {...overlayProps}
        isOpen={isOpen}
        onShowStart={handleOverlayShowStart}
        onHideComplete={handleOverlayHideComplete}
      >
        {contentElement}
      </ModalOverlay>
    ),
    [handleOverlayHideComplete, handleOverlayShowStart, isOpen]
  );

  const contentElement = useCallback(
    (
      contentProps: React.ComponentPropsWithRef<"div">,
      children: React.ReactNode
    ) => (
      <ModalContent
        {...contentProps}
        isOpen={isOpen}
        onShowStart={handleContentShowStart}
        onHideComplete={handleContentHideComplete}
      >
        {children}
      </ModalContent>
    ),
    [handleContentHideComplete, handleContentShowStart, isOpen]
  );

  return (
    <ReactModal
      {...props}
      isOpen={shouldRender}
      style={{
        overlay: {
          ...style.overlay,
          backgroundColor: "transparent",
        },
        content: {
          ...style.content,
          backgroundColor: undefined,
          border: undefined,
          color: undefined,
          inset: undefined,
          outline: undefined,
          padding: undefined,
        },
      }}
      overlayElement={overlayElement}
      contentElement={contentElement}
    />
  );
};
