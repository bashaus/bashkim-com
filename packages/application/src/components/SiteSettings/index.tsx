import { MenuButton, Modal } from "@bashkim-com/design-system";
import { CheckIcon } from "@primer/octicons-react";
import { HTMLAttributes } from "react";

import { SiteSettingsAppearance } from "%components/SiteSettingsAppearance";
import { SiteSettingsGridLines } from "%components/SiteSettingsGridLines";
import { zIndex } from "%styleguide/utils/z-index";

import * as S from "./styles";

export type SiteSettingsProps = {
  isVisible: boolean;
  onClose: HTMLAttributes<HTMLButtonElement>["onClick"];
};

export const SiteSettings = ({ isVisible, onClose }: SiteSettingsProps) => (
  <Modal
    isOpen={isVisible}
    onRequestClose={onClose}
    contentLabel="Site settings"
    style={{
      overlay: {
        zIndex: zIndex("Modal"),
      },
    }}
  >
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
  </Modal>
);
