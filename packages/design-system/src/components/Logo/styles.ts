import styled from "styled-components";

export const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  height: 60px;
  cursor: pointer;
`;

export const Name = styled.strong`
  display: block;
  font-weight: bold;
  line-height: 16px;
  font-size: 14px;
  padding: 0;
  text-transform: uppercase;

  html.isReady & {
    transition: all 0.3s ease-in-out;
  }
`;

export const Title = styled.span`
  display: block;
  padding: 0;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;

  html.isReady & {
    transition: all 0.3s ease-in-out;
  }
`;
