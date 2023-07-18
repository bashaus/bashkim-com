import { render } from "@testing-library/react";

import { AboutEducation } from "./AboutEducation";

describe("<AboutEducation />", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <AboutEducation data-testid="AboutEducation" />,
    );

    expect(getByTestId("AboutEducation")).toBeTruthy();
  });
});
