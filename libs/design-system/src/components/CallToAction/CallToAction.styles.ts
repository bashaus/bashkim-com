import styled from "styled-components";

export const CallToAction = styled.div`
  a {
    color: inherit;
    cursor: pointer;
    border: solid 2px currentColor;
    display: inline-block;
    line-height: 30px;
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: none !important;
    border-radius: 17px;
  }

  a,
  a span {
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    border-color: currentColor;
    background-color: currentColor;
  }

  a:hover span {
    color: currentColor;
    filter: invert(1) brightness(2);
  }
`;
