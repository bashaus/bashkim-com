import { render } from "@testing-library/react";

import { Brick } from "./Brick";

describe("<Brick />", () => {
  it("should render", () => {
    const title = "title text";
    const description = "description text";
    const icon = <>image</>;

    const { getByTestId, getByText } = render(
      <Brick
        data-testid="Brick"
        title={title}
        description={description}
        icon={icon}
      />,
    );

    expect(getByTestId("Brick")).toBeTruthy();
    expect(getByText(title)).toBeTruthy();
    expect(getByText(description)).toBeTruthy();
  });
});
