import accoladeSliceFactory from "@bashkim-com/prismic-factories/accoladeSliceFactory";
import accoladeSliceFieldFactory from "@bashkim-com/prismic-factories/accoladeSliceFieldFactory";
import prismicDateTimeFactory from "@bashkim-com/prismic-factories/prismicDateTimeFactory";
import prismicHeadingFactory from "@bashkim-com/prismic-factories/prismicHeadingFactory";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";

import LinkResolverContext from "../../prismic/LinkResolver";
import AccoladeSlice from ".";

describe("<AccoladeSlice />", () => {
  it("should render", () => {
    const text = faker.lorem.sentence();
    const slice = accoladeSliceFactory.build({
      primary: {
        accolade_slice_type_issuer: prismicHeadingFactory.buildList(1, {
          text,
        }),
        accolade_slice_type_date: prismicDateTimeFactory.build(),
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
