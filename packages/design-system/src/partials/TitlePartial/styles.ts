import { GridContainerBounds, Heading2 } from "@bashkim-com/style-guide";
import styled from "styled-components";

export const TitlePartial = styled.header`
  ${GridContainerBounds()}

  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 16px auto;
  display: block;
  order: 1;
`;

export const Content = styled.div`
  display: block;
  order: 2;
  text-align: center;

  h1 {
    ${Heading2}
    text-align: center;
    margin-bottom: 5px;
  }
`;
