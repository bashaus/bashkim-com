import GridOffIcon from "@mui/icons-material/GridOff";
import GridOnIcon from "@mui/icons-material/GridOn";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useCallback } from "react";

import { SettingsActionSetGridLines } from "../../contexts/Settings/actions";
import { useSettings } from "../../contexts/Settings/context";
import SiteSettingsToggleButton from "../SiteSettingsToggleButton";

export default function SiteSettingsGridLines() {
  const { settingsState, settingsDispatch } = useSettings();
  const { isGridLinesVisible } = settingsState;

  const handleChange = useCallback(
    (event) => {
      settingsDispatch(
        SettingsActionSetGridLines({
          visible: event.currentTarget.value === "1",
        }),
      );
    },
    [settingsDispatch],
  );

  return (
    <ToggleButtonGroup
      onChange={handleChange}
      value={isGridLinesVisible ? "1" : "0"}
    >
      <SiteSettingsToggleButton startIcon={<GridOnIcon />} value="1">
        On
      </SiteSettingsToggleButton>

      <SiteSettingsToggleButton startIcon={<GridOffIcon />} value="0">
        Off
      </SiteSettingsToggleButton>
    </ToggleButtonGroup>
  );
}
