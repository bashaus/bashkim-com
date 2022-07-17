import { MenuButton, Modal, ModalFrame } from "@bashkim-com/design-system";
import { CheckIcon } from "@primer/octicons-react";
import { ComponentPropsWithRef } from "react";

import { SiteSettingsAppearance } from "%components/SiteSettingsAppearance";
import { SiteSettingsGridLines } from "%components/SiteSettingsGridLines";

import * as S from "./styles";

export type SiteSettingsProps = {
  isVisible: boolean;
  onClose: ComponentPropsWithRef<"button">["onClick"];
};

export const SiteSettings = ({ isVisible, onClose }: SiteSettingsProps) => (
  <Modal
    isOpen={isVisible}
    onRequestClose={onClose}
    contentLabel="Site settings"
  >
    <ModalFrame>
      <S.SiteSettings>
        <S.Header>
          <S.HeaderText>Options</S.HeaderText>
          <MenuButton onClick={onClose}>
            <CheckIcon size="small" />
          </MenuButton>
        </S.Header>

        <S.ListItem>
          <S.ListItemLabel>Appearance</S.ListItemLabel>
          <S.ListItemIcon>
            <SiteSettingsAppearance />
          </S.ListItemIcon>
        </S.ListItem>

        <S.ListItem>
          <S.ListItemLabel>Grid lines</S.ListItemLabel>
          <S.ListItemIcon>
            <SiteSettingsGridLines />
          </S.ListItemIcon>
        </S.ListItem>
      </S.SiteSettings>
    </ModalFrame>
  </Modal>
);
