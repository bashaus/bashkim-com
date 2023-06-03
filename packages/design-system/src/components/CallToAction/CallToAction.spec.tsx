import { render } from "@testing-library/react";

import { CallToAction } from "./CallToAction";

describe("<CallToAction />", () => {
  it("should render", () => {
    const title = "title text";

    const { getByTestId, getByText } = render(
      <CallToAction data-testid="CallToAction">{title}</CallToAction>
    );

    expect(getByTestId("CallToAction")).toBeTruthy();
    expect(getByText(title)).toBeTruthy();
  });
});
