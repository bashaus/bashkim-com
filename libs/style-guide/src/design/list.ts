import styled, { css } from "styled-components";

const List = () => css`
  list-style: none;
  counter-reset: li;

  > li {
    margin-left: 20px;
    position: relative;
  }

  > li:first-child {
    margin-top: 0;
  }

  > li::before {
    position: absolute;
    display: block;
    counter-increment: li;
    margin-left: -20px;
  }
`;

export const ListOrdered = styled.ol`
  ${List}

  > li::before {
    content: counter(li) ".";
  }
`;

export const ListUnordered = styled.ul`
  ${List}

  > li::before {
    content: "\2022";
    font-weight: bold;
  }
`;
