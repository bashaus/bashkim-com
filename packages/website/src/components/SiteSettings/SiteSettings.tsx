import { MenuButton, Modal, ModalFrame } from "@bashkim-com/design-system";
import { CheckIcon } from "@primer/octicons-react";
import { ComponentPropsWithoutRef } from "react";

import { SiteSettingsAppearance } from "../SiteSettingsAppearance/SiteSettingsAppearance";
import { SiteSettingsGridLines } from "../SiteSettingsGridLines/SiteSettingsGridLines";
import styles from "./SiteSettings.module.scss";

export type SiteSettingsProps = {
  isVisible: boolean;
  onClose: ComponentPropsWithoutRef<"button">["onClick"];
};

export const SiteSettings = ({ isVisible, onClose }: SiteSettingsProps) => (
  <Modal
    isOpen={isVisible}
    onRequestClose={onClose}
    contentLabel="Site settings"
  >
    <ModalFrame>
      <div className={styles["SiteSettings"]}>
        <div className={styles["Header"]}>
          <div className={styles["HeaderText"]}>Options</div>
          <MenuButton onClick={onClose}>
            <CheckIcon size="small" />
          </MenuButton>
        </div>

        <div
          className={styles["ListItem"]}
          data-test-id="SiteSettings.Appearance"
        >
          <div className={styles["ListItemLabel"]}>Appearance</div>
          <div className={styles["ListItemIcon"]}>
            <SiteSettingsAppearance />
          </div>
        </div>

        <div
          className={styles["ListItem"]}
          data-test-id="SiteSettings.GridLines"
        >
          <div className={styles["ListItemLabel"]}>Grid lines</div>
          <div>
            <SiteSettingsGridLines />
          </div>
        </div>
      </div>
    </ModalFrame>
  </Modal>
);
