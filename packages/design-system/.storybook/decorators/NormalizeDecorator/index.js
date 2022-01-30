import { Normalize } from "@bashkim-com/style-guide";

export const NormalizeDecorator = (Story) => (
  <>
    <Normalize />
    <Story />
  </>
);
