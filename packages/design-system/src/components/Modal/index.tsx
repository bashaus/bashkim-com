import { useCallback, useState } from "react";
import ReactModal, { Props as ReactModalProps } from "react-modal";

import { ModalContent } from "../ModalContent";
import { ModalOverlay } from "../ModalOverlay";

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

  return (
    <ReactModal
      {...props}
      isOpen={shouldRender}
      style={{
        overlay: {
          ...style.overlay,
          /* Override ReactModal defaults */
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
      overlayElement={(overlayProps, contentElement) => (
        <ModalOverlay
          {...overlayProps}
          isOpen={isOpen}
          onShowStart={handleOverlayShowStart}
          onHideComplete={handleOverlayHideComplete}
        >
          {contentElement}
        </ModalOverlay>
      )}
      contentElement={(contentProps, children) => (
        <ModalContent
          {...contentProps}
          isOpen={isOpen}
          onShowStart={handleContentShowStart}
          onHideComplete={handleContentHideComplete}
        >
          {children}
        </ModalContent>
      )}
    />
  );
};
