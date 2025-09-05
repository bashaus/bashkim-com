import captionedImageSliceFactory from "@bashkim-com/prismic-factories/captionedImageSliceFactory";
import prismicHeadingFactory from "@bashkim-com/prismic-factories/prismicHeadingFactory";
import prismicImageFactory from "@bashkim-com/prismic-factories/prismicImageFactory";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";

import CaptionedImageSlice from ".";

describe("<CaptionedImageSlice />", () => {
  it("should render", () => {
    const text = faker.lorem.sentence();
    const slice = captionedImageSliceFactory.build({
      primary: {
        captioned_image_slice_type_caption: prismicHeadingFactory.buildList(1, {
          text,
        }),
        captioned_image_slice_type_image: prismicImageFactory.build(),
      },
    });

    const { getByText } = render(<CaptionedImageSlice slice={slice} />);

    expect(getByText(text)).toBeInTheDocument();
  });
});
