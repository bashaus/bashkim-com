import { composeStories } from "@storybook/nextjs";
import { fireEvent, render } from "@testing-library/react";

import CarouselButtonNext from ".";
import * as stories from "./stories";

const SB = composeStories(stories);

describe("<CarouselButtonNext />", () => {
  it("should handle click", () => {
    const onClick = jest.fn();

    const { getByLabelText } = render(<CarouselButtonNext onClick={onClick} />);
    const button = getByLabelText("Next");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  describe("stories", () => {
    it("#enabled", () => {
      const { getByLabelText } = render(<SB.Enabled />);
      const button = getByLabelText("Next");
      expect(button).toBeInTheDocument();
    });

    it("#disabled", () => {
      const { getByLabelText } = render(<SB.Disabled />);
      const button = getByLabelText("Next");
      expect(button).toBeInTheDocument();
    });
  });
});
