import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";

import NavigationProvider from "./provider";

describe("Navigation#provider", () => {
  it("should render", () => {
    const content = faker.lorem.paragraph();
    const { getByText } = render(
      <NavigationProvider>{content}</NavigationProvider>,
    );

    expect(getByText(content)).toBeInTheDocument();
  });
});
