import RichTextFormatter from "@bashkim-com/design-system/RichTextFormatter";
import type { CaptionedMagazineSliceTypeFragment } from "@bashkim-com/prismic-dal";
import GridViewIcon from "@mui/icons-material/GridView";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup, {
  ToggleButtonGroupProps,
} from "@mui/material/ToggleButtonGroup";
import { AnimatePresence } from "motion/react";
import { useCallback, useState } from "react";

import MagazineFlipBook from "../../components/MagazineFlipBook";
import MagazineLayout from "../../components/MagazineLayout";
import CaptionedPartial from "../../partials/CaptionedPartial";

export type CaptionedMagazineSliceProps = Readonly<{
  slice: CaptionedMagazineSliceTypeFragment;
}>;

export enum Display {
  FlipBook = "FlipBook",
  Layout = "Layout",
}

export default function CaptionedMagazineSlice({
  slice,
}: CaptionedMagazineSliceProps) {
  const [display, setDisplay] = useState<Display>(Display.FlipBook);

  const handleDisplayChange = useCallback<
    NonNullable<ToggleButtonGroupProps["onChange"]>
  >((_, value) => {
    if (value !== null) {
      setDisplay(value);
    }
  }, []);

  if (!slice.fields || !slice.primary) {
    return null;
  }

  const { fields } = slice;
  const { captioned_magazine_slice_type_caption: caption } = slice.primary;

  return (
    <AnimatePresence mode="wait">
      <CaptionedPartial
        figure={
          display === Display.FlipBook ? (
            <MagazineFlipBook images={fields} />
          ) : (
            <MagazineLayout images={fields} />
          )
        }
      >
        <Stack spacing={2}>
          <RichTextFormatter field={caption} />

          <ToggleButtonGroup
            exclusive
            value={display}
            onChange={handleDisplayChange}
            fullWidth
            sx={{ maxWidth: 400 }}
          >
            <ToggleButton value={Display.FlipBook}>
              <Stack direction="row" spacing={1}>
                <ImportContactsIcon />
                <div>Flip Book</div>
              </Stack>
            </ToggleButton>

            <ToggleButton value={Display.Layout}>
              <Stack direction="row" spacing={1}>
                <GridViewIcon />
                <div>Layout</div>
              </Stack>
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </CaptionedPartial>
    </AnimatePresence>
  );
}
