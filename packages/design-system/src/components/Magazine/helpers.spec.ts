import { TurnDisplay } from "../Turn/types";
import {
  convertPageToSpread,
  convertSpreadToPage,
  convertSpreadToPageNumbers,
  normalizePage,
} from "./helpers";

describe("Magazine/Helpers", () => {
  describe("#convertSpreadToPage", () => {
    describe("@display:single", () => {
      it("converts extreme values", () => {
        expect(convertSpreadToPage(TurnDisplay.SINGLE, 1)).toEqual(1);
        expect(convertSpreadToPage(TurnDisplay.SINGLE, 100)).toEqual(100);
      });

      it("converts regular values", () => {
        expect(convertSpreadToPage(TurnDisplay.SINGLE, 2)).toEqual(2);
        expect(convertSpreadToPage(TurnDisplay.SINGLE, 3)).toEqual(3);
        expect(convertSpreadToPage(TurnDisplay.SINGLE, 4)).toEqual(4);
        expect(convertSpreadToPage(TurnDisplay.SINGLE, 5)).toEqual(5);
      });
    });

    describe("@display:double", () => {
      it("converts extreme values", () => {
        expect(convertSpreadToPage(TurnDisplay.DOUBLE, 1)).toEqual(1);
        expect(convertSpreadToPage(TurnDisplay.DOUBLE, 100)).toEqual(198);
      });

      it("converts regular values", () => {
        expect(convertSpreadToPage(TurnDisplay.DOUBLE, 2)).toEqual(2);
        expect(convertSpreadToPage(TurnDisplay.DOUBLE, 3)).toEqual(4);
        expect(convertSpreadToPage(TurnDisplay.DOUBLE, 4)).toEqual(6);
        expect(convertSpreadToPage(TurnDisplay.DOUBLE, 5)).toEqual(8);
      });
    });
  });

  describe("#convertPageToSpread", () => {
    describe("@display:single", () => {
      it("converts extreme values", () => {
        expect(convertPageToSpread(TurnDisplay.SINGLE, 1)).toEqual(1);
        expect(convertPageToSpread(TurnDisplay.SINGLE, 100)).toEqual(100);
      });

      it("converts regular values", () => {
        expect(convertPageToSpread(TurnDisplay.SINGLE, 2)).toEqual(2);
        expect(convertPageToSpread(TurnDisplay.SINGLE, 3)).toEqual(3);
        expect(convertPageToSpread(TurnDisplay.SINGLE, 4)).toEqual(4);
        expect(convertPageToSpread(TurnDisplay.SINGLE, 5)).toEqual(5);
      });
    });

    describe("@display:double", () => {
      it("converts extreme values", () => {
        expect(convertPageToSpread(TurnDisplay.DOUBLE, 1)).toEqual(1);
        expect(convertPageToSpread(TurnDisplay.DOUBLE, 100)).toEqual(51);
      });

      it("converts regular values", () => {
        expect(convertPageToSpread(TurnDisplay.DOUBLE, 2)).toEqual(2);
        expect(convertPageToSpread(TurnDisplay.DOUBLE, 3)).toEqual(2);
        expect(convertPageToSpread(TurnDisplay.DOUBLE, 4)).toEqual(3);
        expect(convertPageToSpread(TurnDisplay.DOUBLE, 5)).toEqual(3);
        expect(convertPageToSpread(TurnDisplay.DOUBLE, 6)).toEqual(4);
        expect(convertPageToSpread(TurnDisplay.DOUBLE, 7)).toEqual(4);
        expect(convertPageToSpread(TurnDisplay.DOUBLE, 8)).toEqual(5);
        expect(convertPageToSpread(TurnDisplay.DOUBLE, 9)).toEqual(5);
      });
    });
  });

  describe("#convertSpreadToPageNumbers", () => {
    describe("@display:single", () => {
      it("returns first page as self", () => {
        expect(convertSpreadToPageNumbers(TurnDisplay.SINGLE, 1, 1)).toEqual([
          1,
        ]);
        expect(convertSpreadToPageNumbers(TurnDisplay.SINGLE, 1, 100)).toEqual([
          1,
        ]);
      });

      it("returns last page as self", () => {
        expect(convertSpreadToPageNumbers(TurnDisplay.SINGLE, 1, 1)).toEqual([
          1,
        ]);
        expect(convertSpreadToPageNumbers(TurnDisplay.SINGLE, 4, 4)).toEqual([
          4,
        ]);
        expect(
          convertSpreadToPageNumbers(TurnDisplay.SINGLE, 100, 100),
        ).toEqual([100]);
      });

      it("returns middle pages as range", () => {
        expect(convertSpreadToPageNumbers(TurnDisplay.SINGLE, 2, 4)).toEqual([
          2,
        ]);
        expect(convertSpreadToPageNumbers(TurnDisplay.SINGLE, 3, 4)).toEqual([
          3,
        ]);
        expect(convertSpreadToPageNumbers(TurnDisplay.SINGLE, 4, 100)).toEqual([
          4,
        ]);
        expect(convertSpreadToPageNumbers(TurnDisplay.SINGLE, 5, 100)).toEqual([
          5,
        ]);
      });
    });

    describe("@display:double", () => {
      it("returns first page as self", () => {
        expect(convertSpreadToPageNumbers(TurnDisplay.DOUBLE, 1, 1)).toEqual([
          1,
        ]);
        expect(convertSpreadToPageNumbers(TurnDisplay.DOUBLE, 1, 100)).toEqual([
          1,
        ]);
      });

      it("returns last page as self", () => {
        expect(convertSpreadToPageNumbers(TurnDisplay.DOUBLE, 1, 1)).toEqual([
          1,
        ]);
        expect(convertSpreadToPageNumbers(TurnDisplay.DOUBLE, 2, 2)).toEqual([
          2,
        ]);
        expect(convertSpreadToPageNumbers(TurnDisplay.DOUBLE, 3, 4)).toEqual([
          4,
        ]);
      });

      it("returns middle pages as range", () => {
        expect(convertSpreadToPageNumbers(TurnDisplay.DOUBLE, 2, 4)).toEqual([
          2, 3,
        ]);
        expect(convertSpreadToPageNumbers(TurnDisplay.DOUBLE, 4, 100)).toEqual([
          6, 7,
        ]);
      });
    });
  });

  describe("#normalizePage", () => {
    describe("@display:single", () => {
      it("converts extreme values", () => {
        expect(normalizePage(TurnDisplay.SINGLE, 1)).toEqual(1);
        expect(normalizePage(TurnDisplay.SINGLE, 100)).toEqual(100);
      });

      it("converts regular values", () => {
        expect(normalizePage(TurnDisplay.SINGLE, 1)).toEqual(1);
        expect(normalizePage(TurnDisplay.SINGLE, 100)).toEqual(100);
      });
    });

    describe("@display:double", () => {
      it("converts extreme values", () => {
        expect(normalizePage(TurnDisplay.DOUBLE, 1)).toEqual(1);
        expect(normalizePage(TurnDisplay.DOUBLE, 100)).toEqual(100);
      });

      it("converts regular values", () => {
        expect(normalizePage(TurnDisplay.DOUBLE, 2)).toEqual(2);
        expect(normalizePage(TurnDisplay.DOUBLE, 3)).toEqual(2);
        expect(normalizePage(TurnDisplay.DOUBLE, 4)).toEqual(4);
        expect(normalizePage(TurnDisplay.DOUBLE, 5)).toEqual(4);
      });
    });
  });
});
