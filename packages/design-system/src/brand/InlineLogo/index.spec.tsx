import { render } from "@testing-library/react";

import InlineLogo from ".";

describe("<InlineLogo />", () => {
  it("should render", () => {
    const { getByLabelText } = render(<InlineLogo />);
    expect(getByLabelText("Bash")).toBeTruthy();
  });
});
