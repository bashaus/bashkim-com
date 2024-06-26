import { render } from "@testing-library/react";

import { Logo } from ".";

describe("<Logo />", () => {
  it("should render", () => {
    const { getByTestId } = render(<Logo data-testid="Logo" />);

    expect(getByTestId("Logo")).toBeTruthy();
  });
});
