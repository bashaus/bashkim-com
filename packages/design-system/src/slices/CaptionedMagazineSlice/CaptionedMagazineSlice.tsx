import type { CaptionedMagazineSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import { DragEvent, FormEvent, useCallback, useState } from "react";

import { Magazine } from "../../components/Magazine/Magazine";
import { MagazineSpreadChangeEvent } from "../../components/Magazine/Magazine.types";
import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import { CaptionedPartial } from "../../partials/CaptionedPartial/CaptionedPartial";
import styles from "./CaptionedMagazineSlice.module.scss";

export type CaptionedMagazineSliceProps = {
  slice: CaptionedMagazineSliceTypeFragment;
};

export const CaptionedMagazineSlice = ({
  slice,
}: CaptionedMagazineSliceProps) => {
  /* infinite state */
  const [magazineIsInitialized, setMagazineIsInitialized] =
    useState<boolean>(false);

  const [spread, setSpread] = useState<number>(1);
  const [spreads, setSpreads] = useState<number>(1);
  const [pageNumbers, setPageNumbers] = useState<Array<number>>([1]);

  const handleImageDrag = useCallback(
    (event: DragEvent<HTMLImageElement>): void => event.preventDefault(),
    []
  );

  const handleMagazineInitialize = useCallback(
    (): void => setMagazineIsInitialized(true),
    []
  );

  const handleMagazineSpreadChange = useCallback(
    (event: MagazineSpreadChangeEvent): void => {
      setSpread(event.spread);
      setSpreads(event.spreads);
      setPageNumbers(event.pageNumbers);
    },
    []
  );

  const handleSpreadChange = useCallback(
    (event: FormEvent<HTMLInputElement>): void => {
      setSpread(+event.currentTarget.value);
    },
    []
  );

  const handlePaginationBack = useCallback((): void => {
    setSpread(spread - 1);
  }, [spread]);

  const handlePaginationNext = useCallback((): void => {
    setSpread(spread + 1);
  }, [spread]);

  const isFirstSpread = spread === 1;
  const isLastSpread = spread === spreads;

  if (!slice.fields || !slice.primary) {
    return null;
  }

  const { fields } = slice;
  const { captioned_magazine_slice_type_caption: caption } = slice.primary;

  const firstImage = fields[0].captioned_magazine_slice_type_images;
  const pages = fields.length;

  return (
    <CaptionedPartial
      figure={
        <Magazine
          spread={spread}
          pages={pages}
          onInitialize={handleMagazineInitialize}
          onSpreadChange={handleMagazineSpreadChange}
          pageWidth={firstImage?.dimensions.width ?? 0}
          pageHeight={firstImage?.dimensions.height ?? 0}
        >
          {fields?.map((field) => {
            if (!field.captioned_magazine_slice_type_images) {
              return null;
            }

            return (
              <div key={field.captioned_magazine_slice_type_images.url}>
                <img
                  onDragStart={handleImageDrag}
                  src={field.captioned_magazine_slice_type_images.url}
                  alt={field.captioned_magazine_slice_type_images.alt ?? ""}
                  width={
                    field.captioned_magazine_slice_type_images.dimensions.width
                  }
                  height={
                    field.captioned_magazine_slice_type_images.dimensions.height
                  }
                />
              </div>
            );
          })}
        </Magazine>
      }
    >
      <RichTextFormatter>
        <PrismicRichText render={caption} />
      </RichTextFormatter>

      {magazineIsInitialized && (
        <div className={styles["Slider"]}>
          <button
            type="button"
            className={styles["PaginationBack"]}
            disabled={isFirstSpread}
            onClick={handlePaginationBack}
          >
            &lsaquo;
          </button>

          <span className={styles["PaginationText"]}>
            Page {pageNumbers.join(" - ")} of {pages}
          </span>

          <button
            type="button"
            className={styles["PaginationNext"]}
            disabled={isLastSpread}
            onClick={handlePaginationNext}
          >
            &rsaquo;
          </button>

          <input
            type="range"
            className={styles["PaginationRange"]}
            min={1}
            max={spreads}
            step={1}
            value={spread}
            onChange={handleSpreadChange}
          />
        </div>
      )}
    </CaptionedPartial>
  );
};

export default CaptionedMagazineSlice;
