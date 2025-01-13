import { render } from "@testing-library/react";

import Tile from ".";

describe("<Tile />", () => {
  it("should render", () => {
    const title = "title text";

    const { getByTestId, getByText } = render(
      <Tile data-testid="Tile" title={title} />,
    );

    expect(getByTestId("Tile")).toBeTruthy();
    expect(getByText(title)).toBeTruthy();
  });
});
