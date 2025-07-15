import { render } from "@testing-library/react";

import SquareLogo from ".";

describe("<SquareLogo />", () => {
  it("should render", () => {
    const { getByLabelText } = render(<SquareLogo />);
    expect(getByLabelText("Bash")).toBeTruthy();
  });
});
