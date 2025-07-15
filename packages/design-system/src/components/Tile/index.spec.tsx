import { render } from "@testing-library/react";
import { placeholderImage } from "placeholder-image-data-url-svg";

import Tile from ".";

describe("<Tile />", () => {
  it("should render", () => {
    const title = "title text";
    const description = "description text";

    const { getByTestId, getByText } = render(
      <Tile
        title={title}
        description={description}
        icon={
          <img
            alt=""
            src={placeholderImage({ width: 300, height: 300, text: "icon" })}
            width={300}
            height={300}
          />
        }
      />,
    );

    expect(getByTestId("Tile")).toBeTruthy();
    expect(getByText(title)).toBeTruthy();
  });
});
