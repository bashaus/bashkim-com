import {
  captionedImageSliceFactory,
  prismicHeading3Factory,
  prismicImageFactory,
} from "@bashkim-com/prismic-dal/factories";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";

import CaptionedImageSlice from ".";

describe("<CaptionedImageSlice />", () => {
  it("should render", () => {
    const text = faker.lorem.sentence();

    const slice = captionedImageSliceFactory.build(undefined, {
      associations: {
        primary: {
          captioned_image_slice_type_image: prismicImageFactory.build(),
          captioned_image_slice_type_caption: [
            prismicHeading3Factory.build({ text }),
          ],
        },
      },
    });

    const { getByText } = render(<CaptionedImageSlice slice={slice} />);

    expect(getByText(text)).toBeInTheDocument();
  });
});
