import prismicHeadingFactory from "@bashkim-com/prismic-factories/prismicHeadingFactory";
import prismicParagraphFactory from "@bashkim-com/prismic-factories/prismicParagraphFactory";
import subtitleSliceFactory from "@bashkim-com/prismic-factories/subtitleSliceFactory";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";

import SubtitleSlice from ".";

describe("<SubtitleSlice />", () => {
  it("should render", () => {
    const headingText = faker.lorem.sentence();
    const descriptionText = faker.lorem.sentence();
    const slice = subtitleSliceFactory.build({
      primary: {
        subtitle_slice_type_heading: prismicHeadingFactory.buildList(1, {
          text: headingText,
        }),
        subtitle_slice_type_description: prismicParagraphFactory.buildList(1, {
          text: descriptionText,
        }),
      },
    });

    const { getByText } = render(<SubtitleSlice slice={slice} />);
    expect(getByText(headingText)).toBeInTheDocument();
    expect(getByText(descriptionText)).toBeInTheDocument();
  });
});
