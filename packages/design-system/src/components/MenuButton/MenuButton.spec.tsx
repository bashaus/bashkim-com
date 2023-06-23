import { fireEvent, render } from "@testing-library/react";

import { MenuButton } from "./MenuButton";

describe("<MenuButton />", () => {
  it("should render", () => {
    const title = "title text";

    const { getByTestId, getByText } = render(
      <MenuButton data-testid="MenuButton">{title}</MenuButton>
    );

    expect(getByTestId("MenuButton")).toBeTruthy();
    expect(getByText(title)).toBeTruthy();
  });

  it("should be clickable", () => {
    const title = "title text";
    const onClick = jest.fn();

    const { getByTestId } = render(
      <MenuButton data-testid="MenuButton" onClick={onClick}>
        {title}
      </MenuButton>
    );

    fireEvent.click(getByTestId("MenuButton"));
    expect(onClick).toHaveBeenCalled();
  });
});
