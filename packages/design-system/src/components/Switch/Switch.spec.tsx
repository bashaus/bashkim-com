import { fireEvent, render } from "@testing-library/react";

import { Switch } from "./Switch";

describe("<Switch />", () => {
  const iconOn = "ON";
  const iconOff = "OFF";

  it("should render", () => {
    const checked = false;
    const onChange = jest.fn();

    const { getByTestId } = render(
      <Switch
        iconOff={iconOff}
        iconOn={iconOn}
        checked={checked}
        onChange={onChange}
      />
    );

    expect(getByTestId("Switch")).toBeTruthy();
    expect(onChange).not.toBeCalled();
  });

  it("should change on click", () => {
    const checked = true;
    const onChange = jest.fn();

    const { getByTestId } = render(
      <Switch
        iconOff={iconOff}
        iconOn={iconOn}
        checked={checked}
        onChange={onChange}
      />
    );

    fireEvent.click(getByTestId("Switch"));
    expect(onChange).toBeCalled();
  });

  it("should change be false when undefined", () => {
    const checked = undefined;
    const onChange = jest.fn();

    const { getByTestId } = render(
      <Switch
        iconOff={iconOff}
        iconOn={iconOn}
        checked={checked}
        onChange={onChange}
      />
    );

    expect(getByTestId("Switch.Input").getAttribute("checked")).toBeFalsy();
    expect(onChange).not.toBeCalled();
  });
});
