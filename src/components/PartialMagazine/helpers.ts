import { Display } from "%components/Turn";

export const normalizePage = (display: Display, page: number): number => {
  switch (display) {
    case Display.SINGLE: {
      return page;
    }

    case Display.DOUBLE: {
      return Math.max(1, page - (page % 2));
    }

    default: {
      throw new Error("Unknown display");
    }
  }
};

export const convertSpreadToPage = (
  display: Display,
  spread: number
): number => {
  switch (display) {
    case Display.SINGLE: {
      return spread;
    }

    case Display.DOUBLE: {
      return Math.max(1, (spread - 1) * 2);
    }

    default: {
      throw new Error("Unknown display");
    }
  }
};

export const convertPageToSpread = (display: Display, page: number): number => {
  switch (display) {
    case Display.SINGLE: {
      return page;
    }

    case Display.DOUBLE: {
      return Math.floor(page / 2) + 1;
    }

    default: {
      throw new Error("Unknown display");
    }
  }
};

export const convertSpreadToPageNumbers = (
  display: Display,
  spread: number,
  pages: number
): Array<number> => {
  const page = convertSpreadToPage(display, spread);

  switch (display) {
    case Display.SINGLE: {
      return [page];
    }

    case Display.DOUBLE: {
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
