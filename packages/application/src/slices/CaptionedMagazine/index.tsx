import { RichText } from "prismic-reactjs";
import { useCallback, useState } from "react";
import type { CaptionedMagazineSliceType } from "@bashkim-com/prismic";

import DeferredAsset from "%components/DeferredAsset";
import Magazine, { MagazineSpreadChangeEvent } from "%components/Magazine";
import PartialCaptioned from "%partials/Captioned";
import LinkResolver from "%prismic/LinkResolver";

import styles from "./styles.module.scss";

type CaptionedMagazineSliceProps = {
  slice: CaptionedMagazineSliceType;
};

const CaptionedMagazineSlice = ({
  slice,
}: CaptionedMagazineSliceProps): JSX.Element => {
  /* infinite state */
  const [magazineIsInitialized, setMagazineIsInitialized] = useState<boolean>(
    false
  );
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
    (event: React.DragEvent<HTMLImageElement>): void => event.preventDefault(),
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
    (event: React.FormEvent<HTMLInputElement>): void => {
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
    <PartialCaptioned
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
      {caption && RichText.render(caption, LinkResolver)}
      {magazineIsInitialized && (
        <div className={styles.slider}>
          <button
            type="button"
            className={styles.paginationBack}
            disabled={isFirstSpread}
            onClick={handlePaginationBack}
          >
            &lsaquo;
          </button>

          <span>{`Page ${pageNumbers.join(" - ")} of ${pages}`}</span>

          <button
            type="button"
            className={styles.paginationNext}
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
    </PartialCaptioned>
  );
};

export default CaptionedMagazineSlice;
