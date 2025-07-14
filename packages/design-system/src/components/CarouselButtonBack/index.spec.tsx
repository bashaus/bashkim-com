import { fireEvent, render } from "@testing-library/react";

import CarouselButtonBack from ".";

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
});
