import {
  newspaperSliceFactory,
  prismicHeadingFactory,
  prismicParagraphFactory,
} from "@bashkim-com/prismic-dal/factories";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";

import NewspaperSlice from ".";

describe("<NewspaperSlice />", () => {
  it("should render", () => {
    const textOne = faker.lorem.sentence();
    const textTwo = faker.lorem.sentence();
    const slice = newspaperSliceFactory.build({
      fields: [
        {
          newspaper_slice_type_group: prismicHeadingFactory.buildList(1, {
            text: textOne,
          }),
        },
        {
          newspaper_slice_type_group: prismicParagraphFactory.buildList(1, {
            text: textTwo,
          }),
        },
      ],
    });

    const { getByText } = render(<NewspaperSlice slice={slice} />);
    expect(getByText(textOne)).toBeInTheDocument();
    expect(getByText(textTwo)).toBeInTheDocument();
  });
});
