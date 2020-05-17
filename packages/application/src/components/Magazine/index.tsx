import React, { useCallback, useEffect, useState } from "react";

import Turn, { Display } from "%components/Turn";
import {
  convertPageToSpread,
  convertSpreadToPageNumbers,
  convertSpreadToPage,
} from "./helpers";

const RESPONSIVE = !process.browser
  ? []
  : [
      {
        media: window.matchMedia("(max-width: 767px)"),
        display: Display.SINGLE,
      },
      {
        media: window.matchMedia("(min-width: 768px)"),
        display: Display.DOUBLE,
      },
    ];

interface MagazineProps {
  children: React.ReactNode;
  onInitialize?(): void;
  onSpreadChange?(event: MagazineSpreadChangeEvent): void;
  spread: number;
  pages: number;
  pageWidth: number;
  pageHeight: number;
}

export interface MagazineSpreadChangeEvent {
  spread: number;
  spreads: number;
  pageNumbers: Array<number>;
}

const Magazine = ({
  children,
  onInitialize,
  onSpreadChange,
  spread,
  pages,
  pageWidth,
  pageHeight,
}: MagazineProps): JSX.Element => {
  /* infinite state */
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [display, setDisplay] = useState<Display>(Display.SINGLE);

  /* helpers */
  const page = convertSpreadToPage(display, spread);

  /* handlers */
  const handleWindowResize = (): void => {
    const matched = RESPONSIVE.find((responsive) => responsive.media.matches);
    if (!matched) {
      return;
    }

    setDisplay(matched.display);
  };

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
    [display]
  );

  const handleTurnPageChange = useCallback(
    (newPage: number): void => {
      const newSpread = convertPageToSpread(display, newPage);
      handleSpreadChange(newSpread);
    },
    [display]
  );

  const handleTurnInitialize = (): void => {
    if (onInitialize) {
      onInitialize();
    }
  };

  /* effects */
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    setIsInitialized(true);

    return (): void => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isInitialized) {
      handleSpreadChange(spread);
    }
  }, [display, spread]);

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

export default Magazine;
