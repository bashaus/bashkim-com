import { composeStories } from "@storybook/nextjs";
import { fireEvent, render } from "@testing-library/react";

import CarouselButtonBack from ".";
import * as stories from "./stories";

const SB = composeStories(stories);

describe("<CarouselButtonBack />", () => {
  it("should handle click when enabled", () => {
    const onClick = jest.fn();

    const { getByLabelText } = render(<CarouselButtonBack onClick={onClick} />);
    const button = getByLabelText("Back");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not handle click when disabled", () => {
    const onClick = jest.fn();

    const { getByLabelText } = render(
      <CarouselButtonBack disabled onClick={onClick} />,
    );
    const button = getByLabelText("Back");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  describe("stories", () => {
    it("#enabled", () => {
      const { getByLabelText } = render(<SB.Enabled />);
      const button = getByLabelText("Back");
      expect(button).toBeInTheDocument();
    });

    it("#disabled", () => {
      const { getByLabelText } = render(<SB.Disabled />);
      const button = getByLabelText("Back");
      expect(button).toBeInTheDocument();
    });
  });
});
