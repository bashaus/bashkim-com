import { RichText } from "prismic-reactjs";
import React, { useState } from "react";
import { CaptionedMagazineSliceType } from "@bashkim-com/prismic";

import DeferredAsset from "%components/DeferredAsset";
import Magazine, { MagazineSpreadChangeEvent } from "%components/Magazine";
import PartialCaptioned from "%partials/Captioned";
import LinkResolver from "%prismic/LinkResolver";

import styles from "./styles.module.scss";

interface CaptionedMagazineSliceProps {
  slice: CaptionedMagazineSliceType;
}

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
  const { CaptionedMagazineSliceType_Caption: caption } = slice.primary;

  /* repeat */
  const { items } = slice;

  /* helpers */
  const firstImage = items[0].CaptionedMagazineSliceType_Images;
  const pages = items.length;

  /* handlers */
  const handleImageDrag = (e: React.DragEvent<HTMLImageElement>): void => {
    e.preventDefault();
  };

  const handleMagazineInitialize = (): void => {
    setMagazineIsInitialized(true);
  };

  const handleMagazineSpreadChange = (
    event: MagazineSpreadChangeEvent
  ): void => {
    setSpread(event.spread);
    setSpreads(event.spreads);
    setPageNumbers(event.pageNumbers);
  };

  const handleSpreadChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSpread(+e.currentTarget.value);
  };

  const handlePaginationBack = (): void => {
    setSpread(spread - 1);
  };

  const handlePaginationNext = (): void => {
    setSpread(spread + 1);
  };

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
            {items.map((item) => (
              <li key={item.CaptionedMagazineSliceType_Images.url}>
                <img
                  onDragStart={handleImageDrag}
                  src={item.CaptionedMagazineSliceType_Images.url}
                  alt={item.CaptionedMagazineSliceType_Images.alt || ""}
                  width={
                    item.CaptionedMagazineSliceType_Images.dimensions.width
                  }
                  height={
                    item.CaptionedMagazineSliceType_Images.dimensions.height
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
