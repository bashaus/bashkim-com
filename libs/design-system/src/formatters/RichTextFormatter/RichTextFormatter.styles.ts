import {
  GridDesign,
  Heading1,
  Heading2,
  Heading3,
  ListOrdered,
  ListUnordered,
  MediaQueryDesktopNarrow,
  MediaQueryDesktopWide,
  MediaQueryMobileLandscape,
  MediaQueryMobilePortrait,
  MediaQueryTabletLandscape,
  MediaQueryTabletPortrait,
} from "@bashkim-com/style-guide";
import styled from "styled-components";

export const RichTextFormatter = styled.div`
  * + * {
    @media ${MediaQueryMobilePortrait} {
      margin-top: ${GridDesign["MobilePortrait"].gutter};
    }

    @media ${MediaQueryMobileLandscape} {
      margin-top: ${GridDesign["MobileLandscape"].gutter};
    }

    @media ${MediaQueryTabletPortrait} {
      margin-top: ${GridDesign["TabletPortrait"].gutter};
    }

    @media ${MediaQueryTabletLandscape} {
      margin-top: ${GridDesign["TabletLandscape"].gutter};
    }

    @media ${MediaQueryDesktopNarrow} {
      margin-top: ${GridDesign["DesktopNarrow"].gutter};
    }

    @media ${MediaQueryDesktopWide} {
      margin-top: ${GridDesign["DesktopWide"].gutter};
    }
  }

  h1 {
    ${Heading1};
  }

  h2 {
    ${Heading2};
  }

  h3 {
    ${Heading3};
  }

  ol {
    ${ListOrdered};
  }

  ul {
    ${ListUnordered};
  }

  li {
    margin-top: 0;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  a {
    text-decoration: underline;
  }
`;
