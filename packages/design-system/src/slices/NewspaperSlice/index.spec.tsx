import {
  newspaperSliceFactory,
  newspaperSliceFieldFactory,
  prismicHeading3Factory,
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
        newspaperSliceFieldFactory.build({
          newspaper_slice_type_group: [
            prismicHeading3Factory.build({ text: textOne }),
          ],
        }),

        newspaperSliceFieldFactory.build({
          newspaper_slice_type_group: [
            prismicParagraphFactory.build({ text: textTwo }),
          ],
        }),
      ],
    });

    const { getByText } = render(<NewspaperSlice slice={slice} />);
    expect(getByText(textOne)).toBeInTheDocument();
    expect(getByText(textTwo)).toBeInTheDocument();
  });
});
