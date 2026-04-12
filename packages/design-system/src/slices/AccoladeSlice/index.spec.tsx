import {
  accoladeSliceFactory,
  accoladeSliceFieldFactory,
  accoladeSlicePrimaryFactory,
  prismicHeading3Factory,
} from "@bashkim-com/prismic-dal/factories";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";

import LinkResolverContext from "../../prismic/LinkResolver";
import AccoladeSlice from ".";

describe("<AccoladeSlice />", () => {
  it("should render", () => {
    const text = faker.lorem.sentence();

    const slice = accoladeSliceFactory.build(undefined, {
      associations: {
        primary: accoladeSlicePrimaryFactory.build({
          accolade_slice_type_issuer: [prismicHeading3Factory.build({ text })],
        }),

        fields: [
          accoladeSliceFieldFactory.build({
            accolade_slice_type_award_place: "gold",
          }),
        ],
      },
    });

    const { getByText } = render(
      <LinkResolverContext.Provider value={() => "/"}>
        <AccoladeSlice slice={slice} />,
      </LinkResolverContext.Provider>,
    );

    expect(getByText(/gold/)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
  });
});
