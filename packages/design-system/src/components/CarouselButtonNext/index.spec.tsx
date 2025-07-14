import { fireEvent, render } from "@testing-library/react";

import CarouselButtonNext from ".";

describe("<CarouselButtonNext />", () => {
  it("should handle click", () => {
    const onClick = jest.fn();

    const { getByLabelText } = render(<CarouselButtonNext onClick={onClick} />);
    const button = getByLabelText("Next");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
