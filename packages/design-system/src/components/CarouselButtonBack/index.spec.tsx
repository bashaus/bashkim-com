import { fireEvent, render } from "@testing-library/react";

import CarouselButtonBack from ".";

describe("<CarouselButtonBack />", () => {
  it("should handle click", () => {
    const onClick = jest.fn();

    const { getByLabelText } = render(<CarouselButtonBack onClick={onClick} />);
    const button = getByLabelText("Back");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
