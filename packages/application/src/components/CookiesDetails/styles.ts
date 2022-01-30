import {
  GridCellPadding,
  GridSides,
  MediaQueryMobile,
  MediaQueryNotMobile,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const CookiesTable = styled.table`
  width: 100%;

  th {
    font-weight: bold;
    text-align: left;
  }

  @media ${MediaQueryMobile} {
    thead {
      display: none;
    }

    tr {
      display: block;
      ${GridCellPadding({
        sides: [GridSides.TOP, GridSides.BOTTOM],
      })};
    }

    tbody th,
    tbody td {
      position: relative;
      display: block;
      text-align: left;
      margin-left: 100px;
    }

    tbody th::before,
    tbody td::before {
      display: block;
      font-weight: bold;
      position: absolute;
      left: -100px;
    }

    tbody th::before {
      content: "Name";
    }

    tbody td:nth-child(2)::before {
      content: "Purpose";
    }

    tbody td:nth-child(3)::before {
      content: "Lifetime";
    }
  }

  @media ${MediaQueryNotMobile} {
    th {
      min-width: 100px;
    }

    thead th {
      ${GridCellPadding({
        sides: [GridSides.LEFT, GridSides.RIGHT],
      })}
    }

    tbody th,
    tbody td {
      ${GridCellPadding({
        sides: [GridSides.TOP, GridSides.LEFT, GridSides.RIGHT],
      })}
    }

    thead th:first-child,
    tbody th:first-child {
      padding-left: 0 !important;
    }

    thead th:last-child,
    tbody td:last-child {
      padding-right: 0 !important;
      text-align: right;
    }
  }
`;
