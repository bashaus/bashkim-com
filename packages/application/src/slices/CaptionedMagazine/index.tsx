import { DragEvent, FormEvent, useCallback, useState } from "react";

import { CaptionedPartial } from "@bashkim-com/design-system";
import {
  PrismicRichText,
  CaptionedMagazineSliceType,
} from "@bashkim-com/prismic";

import { DeferredAsset } from "%components/DeferredAsset";
import { Magazine, MagazineSpreadChangeEvent } from "%components/Magazine";

import styles from "./styles.module.scss";

export type CaptionedMagazineSliceProps = {
  slice: CaptionedMagazineSliceType;
};

export const CaptionedMagazineSlice = ({
  slice,
}: CaptionedMagazineSliceProps): JSX.Element => {
  /* infinite state */
  const [magazineIsInitialized, setMagazineIsInitialized] =
    useState<boolean>(false);

  const [spread, setSpread] = useState<number>(1);
  const [spreads, setSpreads] = useState<number>(1);
  const [pageNumbers, setPageNumbers] = useState<Array<number>>([1]);

  /* non-repeat */
  const { captioned_magazine_slice_type_caption: caption } = slice.primary;

  /* repeat */
  const { fields } = slice;

  /* helpers */
  const firstImage = fields[0].captioned_magazine_slice_type_images;
  const pages = fields.length;

  /* handlers */
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

  return (
    <CaptionedPartial
      figure={
        <DeferredAsset
          width={firstImage.dimensions.width * 2}
          height={firstImage.dimensions.height}
        >
          <Magazine
            spread={spread}
            pages={pages}
            onInitialize={handleMagazineInitialize}
            onSpreadChange={handleMagazineSpreadChange}
            pageWidth={firstImage.dimensions.width}
            pageHeight={firstImage.dimensions.height}
          >
            {fields.map((field) => (
              <li key={field.captioned_magazine_slice_type_images.url}>
                <img
                  onDragStart={handleImageDrag}
                  src={field.captioned_magazine_slice_type_images.url}
                  alt={field.captioned_magazine_slice_type_images.alt || ""}
                  width={
                    field.captioned_magazine_slice_type_images.dimensions.width
                  }
                  height={
                    field.captioned_magazine_slice_type_images.dimensions.height
                  }
                />
              </li>
            ))}
          </Magazine>
        </DeferredAsset>
      }
    >
      <PrismicRichText render={caption} />
      {magazineIsInitialized && (
        <div className={styles.Slider}>
          <button
            type="button"
            className={styles.PaginationBack}
            disabled={isFirstSpread}
            onClick={handlePaginationBack}
          >
            &lsaquo;
          </button>

          <span>{`Page ${pageNumbers.join(" - ")} of ${pages}`}</span>

          <button
            type="button"
            className={styles.PaginationNext}
            disabled={isLastSpread}
            onClick={handlePaginationNext}
          >
            &rsaquo;
          </button>

          <input
            type="range"
            min={1}
            max={spreads}
            value={spread}
            onChange={handleSpreadChange}
          />
        </div>
      )}
    </CaptionedPartial>
  );
};

export default CaptionedMagazineSlice;
