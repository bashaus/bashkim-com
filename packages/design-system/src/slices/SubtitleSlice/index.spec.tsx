import {
  prismicHeading3Factory,
  prismicParagraphFactory,
  subtitleSliceFactory,
  subtitleSlicePrimaryFactory,
} from "@bashkim-com/prismic-dal/factories";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";

import SubtitleSlice from ".";

describe("<SubtitleSlice />", () => {
  it("should render", () => {
    const headingText = faker.lorem.sentence();
    const descriptionText = faker.lorem.sentence();

    const slice = subtitleSliceFactory.build(undefined, {
      associations: {
        primary: subtitleSlicePrimaryFactory.build({
          subtitle_slice_type_heading: [
            prismicHeading3Factory.build({ text: headingText }),
          ],

          subtitle_slice_type_description: [
            prismicParagraphFactory.build({ text: descriptionText }),
          ],
        }),
      },
    });

    const { getByText } = render(<SubtitleSlice slice={slice} />);
    expect(getByText(headingText)).toBeInTheDocument();
    expect(getByText(descriptionText)).toBeInTheDocument();
  });
});
