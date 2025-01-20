import GridOffIcon from "@mui/icons-material/GridOff";
import GridOnIcon from "@mui/icons-material/GridOn";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
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
      <ToggleButton value="1">
        <SiteSettingsToggleButton startIcon={<GridOnIcon />}>
          On
        </SiteSettingsToggleButton>
      </ToggleButton>

      <ToggleButton value="0">
        <SiteSettingsToggleButton startIcon={<GridOffIcon />}>
          Off
        </SiteSettingsToggleButton>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
