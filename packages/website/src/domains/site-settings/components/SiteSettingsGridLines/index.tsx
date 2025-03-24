import GridOffIcon from "@mui/icons-material/GridOff";
import GridOnIcon from "@mui/icons-material/GridOn";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { MouseEvent, useCallback } from "react";

import SiteSettingsToggleButton from "@/domains/site-settings/components/SiteSettingsToggleButton";
import { SiteSettingsActionSetGridLines } from "@/domains/site-settings/contexts/SiteSettings/actions";
import { useSiteSettings } from "@/domains/site-settings/contexts/SiteSettings/context";

export default function SiteSettingsGridLines() {
  const { siteSettingsState, siteSettingsDispatch } = useSiteSettings();
  const { isGridLinesVisible } = siteSettingsState;

  const handleChange = useCallback(
    (_event: MouseEvent<HTMLElement>, value: string) => {
      siteSettingsDispatch(
        SiteSettingsActionSetGridLines({
          visible: value === "1",
        }),
      );
    },
    [siteSettingsDispatch],
  );

  return (
    <ToggleButtonGroup
      exclusive
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
