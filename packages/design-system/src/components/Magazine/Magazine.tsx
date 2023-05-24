import { ReactNode, useCallback, useEffect, useState } from "react";

import { Turn } from "../Turn/Turn";
import { TurnDisplay } from "../Turn/Turn.types";
import {
  convertPageToSpread,
  convertSpreadToPage,
  convertSpreadToPageNumbers,
} from "./Magazine.helpers";
import { MagazineSpreadChangeEvent } from "./Magazine.types";

const RESPONSIVE =
  typeof window !== typeof undefined
    ? [
        {
          media: window.matchMedia("(max-width: 767px)"),
          display: TurnDisplay.SINGLE,
        },
        {
          media: window.matchMedia("(min-width: 768px)"),
          display: TurnDisplay.DOUBLE,
        },
      ]
    : [];

export type MagazineProps = {
  children: ReactNode;
  onInitialize?(): void;
  onSpreadChange?(event: MagazineSpreadChangeEvent): void;
  spread: number;
  pages: number;
  pageWidth: number;
  pageHeight: number;
};

export const Magazine = ({
  children,
  onInitialize,
  onSpreadChange,
  spread,
  pages,
  pageWidth,
  pageHeight,
}: MagazineProps) => {
  /* infinite state */
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [display, setDisplay] = useState<TurnDisplay>(TurnDisplay.SINGLE);

  /* helpers */
  const page = convertSpreadToPage(display, spread);

  /* handlers */
  const handleWindowResize = useCallback((): void => {
    const matched = RESPONSIVE.find((responsive) => responsive.media.matches);
    if (!matched) {
      return;
    }

    setDisplay(matched.display);
  }, []);

  const handleSpreadChange = useCallback(
    (newSpread: number): void => {
      if (!onSpreadChange) {
        return;
      }

      const newSpreads = convertPageToSpread(display, pages);
      const pageNumbers = convertSpreadToPageNumbers(display, newSpread, pages);

      onSpreadChange({
        spread: newSpread,
        spreads: newSpreads,
        pageNumbers,
      } as MagazineSpreadChangeEvent);
    },
    [display, onSpreadChange, pages]
  );

  const handleTurnPageChange = useCallback(
    (newPage: number): void => {
      const newSpread = convertPageToSpread(display, newPage);
      handleSpreadChange(newSpread);
    },
    [display, handleSpreadChange]
  );

  const handleTurnInitialize = useCallback(
    (): void => onInitialize?.(),
    [onInitialize]
  );

  /* effects */
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    setIsInitialized(true);

    return (): void => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    isInitialized && handleSpreadChange(spread);
  }, [display, spread, handleSpreadChange, isInitialized]);

  return (
    <Turn
      center
      display={display}
      page={page}
      pages={pages}
      onInitialize={handleTurnInitialize}
      onPageChange={handleTurnPageChange}
      pageWidth={pageWidth}
      pageHeight={pageHeight}
    >
      {children}
    </Turn>
  );
};
