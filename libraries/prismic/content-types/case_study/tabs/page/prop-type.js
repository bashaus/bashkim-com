import PropTypes from 'prop-types';

import CaptionedImageSlicePropType from '%prismic/slice-types/CaptionedImage/prop-type';
import CaptionedMagazineSlicePropType from '%prismic/slice-types/CaptionedMagazine/prop-type';
import CaptionedScreenshotsSlicePropType from '%prismic/slice-types/CaptionedScreenshots/prop-type';
import CaptionedVideoSlicePropType from '%prismic/slice-types/CaptionedVideo/prop-type';
import CarouselImagesSlicePropType from '%prismic/slice-types/CarouselImages/prop-type';
import CarouselPhonesSlicePropType from '%prismic/slice-types/CarouselPhones/prop-type';
import FullTextSlicePropType from '%prismic/slice-types/FullText/prop-type';
import NewspaperSlicePropType from '%prismic/slice-types/Newspaper/prop-type';
import SubtitleSlicePropType from '%prismic/slice-types/Subtitle/prop-type';
import GridEmbedSlicePropType from '%prismic/slice-types/GridEmbed/prop-type';
import GridVideoSlicePropType from '%prismic/slice-types/GridVideo/prop-type';

export default {
  body: PropTypes.arrayOf(
    PropTypes.oneOfType([
      CaptionedImageSlicePropType,
      CaptionedMagazineSlicePropType,
      CaptionedScreenshotsSlicePropType,
      CaptionedVideoSlicePropType,
      CarouselImagesSlicePropType,
      CarouselPhonesSlicePropType,
      FullTextSlicePropType,
      NewspaperSlicePropType,
      SubtitleSlicePropType,
      GridEmbedSlicePropType,
      GridVideoSlicePropType,
    ]),
  ),
};
