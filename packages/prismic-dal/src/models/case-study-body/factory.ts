import { Factory } from "fishery";

import { CaseStudyBodyModelFragment } from "../../gql/graphql";
import { captionedImageSliceFactory } from "../../slice-types/captioned-image/factory";
import { captionedMagazineSliceFactory } from "../../slice-types/captioned-magazine/factory";
import { captionedScreenshotsSliceFactory } from "../../slice-types/captioned-screenshots/factory";
import { captionedVideoSliceFactory } from "../../slice-types/captioned-video/factory";
import { carouselImagesSliceFactory } from "../../slice-types/carousel-images/factory";
import { carouselPhonesSliceFactory } from "../../slice-types/carousel-phones/factory";
import { fullTextSliceFactory } from "../../slice-types/full-text/factory";
import { gridEmbedSliceFactory } from "../../slice-types/grid-embed/factory";
import { gridVideoSliceFactory } from "../../slice-types/grid-video/factory";
import { newspaperSliceFactory } from "../../slice-types/newspaper/factory";
import { subtitleSliceFactory } from "../../slice-types/subtitle/factory";

export const caseStudyBodyModelFactory =
  Factory.define<CaseStudyBodyModelFragment>(() => {
    return {
      __typename: "Case_study",
      body: [
        captionedImageSliceFactory.build(),
        captionedMagazineSliceFactory.build(),
        captionedScreenshotsSliceFactory.build(),
        captionedVideoSliceFactory.build(),
        carouselImagesSliceFactory.build(),
        carouselPhonesSliceFactory.build(),
        fullTextSliceFactory.build(),
        gridEmbedSliceFactory.build(),
        gridVideoSliceFactory.build(),
        newspaperSliceFactory.build(),
        subtitleSliceFactory.build(),
      ],
    };
  });
