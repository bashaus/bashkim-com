import {
  accoladeSliceFactory,
  accoladeSliceFieldFactory,
  prismicDateTimeFactory,
  prismicHeading3Factory,
} from "@bashkim-com/prismic-dal/factories";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";

import LinkResolverContext from "../../prismic/LinkResolver";
import AccoladeSlice from ".";

describe("<AccoladeSlice />", () => {
  it("should render", () => {
    const text = faker.lorem.sentence();

    const slice = accoladeSliceFactory.build({
      primary: {
        accolade_slice_type_date: prismicDateTimeFactory.build(),
        accolade_slice_type_issuer: prismicHeading3Factory.buildList(1, {
          text,
        }),
      },

      fields: accoladeSliceFieldFactory.buildList(1, {
        accolade_slice_type_award_place: "gold",
      }),
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
