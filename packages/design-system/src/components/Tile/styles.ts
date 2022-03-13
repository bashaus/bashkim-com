import {
  DesignBoxBackgroundColor,
  DesignBoxForegroundColor,
  DesignBoxShadow,
  DesignBoxShadowAccent,
  Heading3,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const Tile = styled.div`
  background-color: ${DesignBoxBackgroundColor};
  color: ${DesignBoxForegroundColor};
  box-shadow: ${DesignBoxShadow};
  transition: all 0.3s ease-in-out;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  height: 100%;
  max-width: 350px;

  a:hover & {
    box-shadow: ${DesignBoxShadowAccent};
  }
`;

export const Poster = styled.div`
  height: 1px;
  padding-bottom: 56.25%;
  order: 1;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 12px;
`;

export const Icon = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  width: 158px;
  height: 158px;
  order: 2;
  border-radius: 50%;
  border: solid 4px ${DesignBoxBackgroundColor};
  background-color: ${DesignBoxBackgroundColor};
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Heading = styled.h3`
  ${Heading3}
  order: 3;
`;

export const Description = styled.p`
  order: 4;
  margin-top: 10px;
`;
