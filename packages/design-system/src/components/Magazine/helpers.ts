import { TurnDisplay } from "../Turn";

export const normalizePage = (display: TurnDisplay, page: number): number => {
  switch (display) {
    case TurnDisplay.SINGLE: {
      return page;
    }

    case TurnDisplay.DOUBLE: {
      return Math.max(1, page - (page % 2));
    }

    default: {
      throw new Error("Unknown display");
    }
  }
};

export const convertSpreadToPage = (
  display: TurnDisplay,
  spread: number
): number => {
  switch (display) {
    case TurnDisplay.SINGLE: {
      return spread;
    }

    case TurnDisplay.DOUBLE: {
      return Math.max(1, (spread - 1) * 2);
    }

    default: {
      throw new Error("Unknown display");
    }
  }
};

export const convertPageToSpread = (
  display: TurnDisplay,
  page: number
): number => {
  switch (display) {
    case TurnDisplay.SINGLE: {
      return page;
    }

    case TurnDisplay.DOUBLE: {
      return Math.floor(page / 2) + 1;
    }

    default: {
      throw new Error("Unknown display");
    }
  }
};

export const convertSpreadToPageNumbers = (
  display: TurnDisplay,
  spread: number,
  pages: number
): Array<number> => {
  const page = convertSpreadToPage(display, spread);

  switch (display) {
    case TurnDisplay.SINGLE: {
      return [page];
    }

    case TurnDisplay.DOUBLE: {
      if (page === 1 || page === pages) {
        return [page];
      }

      return [page, page + 1];
    }

    default: {
      throw new Error("Unknown display");
    }
  }
};
