import { Display } from "%components/Turn";

import {
  convertSpreadToPage,
  convertPageToSpread,
  convertSpreadToPageNumbers,
  normalizePage,
} from "./helpers";

describe("Magazine/Helpers", () => {
  describe("#convertSpreadToPage", () => {
    describe("@display:single", () => {
      it("converts extreme values", () => {
        expect(convertSpreadToPage(Display.SINGLE, 1)).toEqual(1);
        expect(convertSpreadToPage(Display.SINGLE, 100)).toEqual(100);
      });

      it("converts regular values", () => {
        expect(convertSpreadToPage(Display.SINGLE, 2)).toEqual(2);
        expect(convertSpreadToPage(Display.SINGLE, 3)).toEqual(3);
        expect(convertSpreadToPage(Display.SINGLE, 4)).toEqual(4);
        expect(convertSpreadToPage(Display.SINGLE, 5)).toEqual(5);
      });
    });

    describe("@display:double", () => {
      it("converts extreme values", () => {
        expect(convertSpreadToPage(Display.DOUBLE, 1)).toEqual(1);
        expect(convertSpreadToPage(Display.DOUBLE, 100)).toEqual(198);
      });

      it("converts regular values", () => {
        expect(convertSpreadToPage(Display.DOUBLE, 2)).toEqual(2);
        expect(convertSpreadToPage(Display.DOUBLE, 3)).toEqual(4);
        expect(convertSpreadToPage(Display.DOUBLE, 4)).toEqual(6);
        expect(convertSpreadToPage(Display.DOUBLE, 5)).toEqual(8);
      });
    });
  });

  describe("#convertPageToSpread", () => {
    describe("@display:single", () => {
      it("converts extreme values", () => {
        expect(convertPageToSpread(Display.SINGLE, 1)).toEqual(1);
        expect(convertPageToSpread(Display.SINGLE, 100)).toEqual(100);
      });

      it("converts regular values", () => {
        expect(convertPageToSpread(Display.SINGLE, 2)).toEqual(2);
        expect(convertPageToSpread(Display.SINGLE, 3)).toEqual(3);
        expect(convertPageToSpread(Display.SINGLE, 4)).toEqual(4);
        expect(convertPageToSpread(Display.SINGLE, 5)).toEqual(5);
      });
    });

    describe("@display:double", () => {
      it("converts extreme values", () => {
        expect(convertPageToSpread(Display.DOUBLE, 1)).toEqual(1);
        expect(convertPageToSpread(Display.DOUBLE, 100)).toEqual(51);
      });

      it("converts regular values", () => {
        expect(convertPageToSpread(Display.DOUBLE, 2)).toEqual(2);
        expect(convertPageToSpread(Display.DOUBLE, 3)).toEqual(2);
        expect(convertPageToSpread(Display.DOUBLE, 4)).toEqual(3);
        expect(convertPageToSpread(Display.DOUBLE, 5)).toEqual(3);
        expect(convertPageToSpread(Display.DOUBLE, 6)).toEqual(4);
        expect(convertPageToSpread(Display.DOUBLE, 7)).toEqual(4);
        expect(convertPageToSpread(Display.DOUBLE, 8)).toEqual(5);
        expect(convertPageToSpread(Display.DOUBLE, 9)).toEqual(5);
      });
    });
  });

  describe("#convertSpreadToPageNumbers", () => {
    describe("@display:single", () => {
      it("returns first page as self", () => {
        expect(convertSpreadToPageNumbers(Display.SINGLE, 1, 1)).toEqual([1]);
        expect(convertSpreadToPageNumbers(Display.SINGLE, 1, 100)).toEqual([1]);
      });

      it("returns last page as self", () => {
        expect(convertSpreadToPageNumbers(Display.SINGLE, 1, 1)).toEqual([1]);
        expect(convertSpreadToPageNumbers(Display.SINGLE, 4, 4)).toEqual([4]);
        expect(convertSpreadToPageNumbers(Display.SINGLE, 100, 100)).toEqual([
          100,
        ]);
      });

      it("returns middle pages as range", () => {
        expect(convertSpreadToPageNumbers(Display.SINGLE, 2, 4)).toEqual([2]);
        expect(convertSpreadToPageNumbers(Display.SINGLE, 3, 4)).toEqual([3]);
        expect(convertSpreadToPageNumbers(Display.SINGLE, 4, 100)).toEqual([4]);
        expect(convertSpreadToPageNumbers(Display.SINGLE, 5, 100)).toEqual([5]);
      });
    });

    describe("@display:double", () => {
      it("returns first page as self", () => {
        expect(convertSpreadToPageNumbers(Display.DOUBLE, 1, 1)).toEqual([1]);
        expect(convertSpreadToPageNumbers(Display.DOUBLE, 1, 100)).toEqual([1]);
      });

      it("returns last page as self", () => {
        expect(convertSpreadToPageNumbers(Display.DOUBLE, 1, 1)).toEqual([1]);
        expect(convertSpreadToPageNumbers(Display.DOUBLE, 2, 2)).toEqual([2]);
        expect(convertSpreadToPageNumbers(Display.DOUBLE, 3, 4)).toEqual([4]);
      });

      it("returns middle pages as range", () => {
        expect(convertSpreadToPageNumbers(Display.DOUBLE, 2, 4)).toEqual([
          2,
          3,
        ]);
        expect(convertSpreadToPageNumbers(Display.DOUBLE, 4, 100)).toEqual([
          6,
          7,
        ]);
      });
    });
  });

  describe("#normalizePage", () => {
    describe("@display:single", () => {
      it("converts extreme values", () => {
        expect(normalizePage(Display.SINGLE, 1)).toEqual(1);
        expect(normalizePage(Display.SINGLE, 100)).toEqual(100);
      });

      it("converts regular values", () => {
        expect(normalizePage(Display.SINGLE, 1)).toEqual(1);
        expect(normalizePage(Display.SINGLE, 100)).toEqual(100);
      });
    });

    describe("@display:double", () => {
      it("converts extreme values", () => {
        expect(normalizePage(Display.DOUBLE, 1)).toEqual(1);
        expect(normalizePage(Display.DOUBLE, 100)).toEqual(100);
      });

      it("converts regular values", () => {
        expect(normalizePage(Display.DOUBLE, 2)).toEqual(2);
        expect(normalizePage(Display.DOUBLE, 3)).toEqual(2);
        expect(normalizePage(Display.DOUBLE, 4)).toEqual(4);
        expect(normalizePage(Display.DOUBLE, 5)).toEqual(4);
      });
    });
  });
});
