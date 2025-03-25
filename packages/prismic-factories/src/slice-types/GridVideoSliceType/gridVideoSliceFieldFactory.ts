import type { GridVideoSliceTypeFieldFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import prismicImageFactory from "../../prismic/prismicImageFactory";
import prismicParagraphFactory from "../../prismic/prismicParagraphFactory";
import prismicVideoFactory from "../../prismic/prismicVideoFactory";

const gridVideoSliceFieldFactory =
  Factory.define<GridVideoSliceTypeFieldFragment>((opts) => {
    const { width: posterWidth = 400, height: posterHeight = 300 } =
      opts.params.grid_video_slice_type_poster?.dimensions ?? {};

    const {
      thumbnail_height: thumbnailWidth = 480,
      thumbnail_width: thumbnailHeight = 360,
    } = opts.params.grid_video_slice_type_video?.dimensions ?? {};

    return {
      grid_video_slice_type_description: prismicParagraphFactory.buildList(1),
      grid_video_slice_type_poster: prismicImageFactory.build({
        dimensions: { width: posterWidth, height: posterHeight },
        alt: `Video ${opts.sequence}`,
      }),
      grid_video_slice_type_video: prismicVideoFactory.build({
        thumbnail_width: thumbnailWidth,
        thumbnail_height: thumbnailHeight,
      }),
    };
  });

export default gridVideoSliceFieldFactory;
