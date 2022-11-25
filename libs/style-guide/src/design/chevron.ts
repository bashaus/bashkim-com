import { css } from "styled-components";

export const ChevronDown = ({ delta = "20px" } = {}) => css`
  margin-bottom: -${delta};
  padding-bottom: ${delta};
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% calc(100% - ${delta}),
    calc(50% + ${delta}) calc(100% - ${delta}),
    50% 100%,
    calc(50% - ${delta}) calc(100% - ${delta}),
    0% calc(100% - ${delta})
  );
`;

export const ChevronLeft = ({ delta = "20px" } = {}) => css`
  margin-right: -${delta};
  padding-right: ${delta};
  clip-path: polygon(
    0% 0%,
    calc(100% - ${delta}) 0%,
    calc(100% - ${delta}) calc(50% - ${delta}),
    100% 50%,
    calc(100% - ${delta}) calc(50% + ${delta}),
    calc(100% - ${delta}) 100%,
    0% 100%
  );
`;

export const ChevronRight = ({ delta = "20px" } = {}) => css`
  margin-left: -${delta};
  padding-left: ${delta};
  clip-path: polygon(
    calc(0% + ${delta}) 0%,
    100% 0%,
    100% 100%,
    calc(0% + ${delta}) 100%,
    calc(0% + ${delta}) calc(50% + ${delta}),
    0% 50%,
    calc(0% + ${delta}) calc(50% - ${delta})
  );
`;
