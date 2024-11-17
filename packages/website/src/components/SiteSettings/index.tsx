import { MenuButton, Modal, ModalFrame } from "@bashkim-com/design-system";
import CheckIcon from "@mui/icons-material/Check";
import { ComponentPropsWithoutRef } from "react";

import { SiteSettingsAppearance } from "../SiteSettingsAppearance";
import { SiteSettingsGridLines } from "../SiteSettingsGridLines";
import styles from "./styles.module.scss";

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
          <div className={styles["HeaderText"]}>Site settings</div>
          <MenuButton onClick={onClose}>
            <CheckIcon sx={{ width: 16, height: 16 }} />
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
