import {
  FullBannerPartial,
  RichTextFormatter,
} from "@bashkim-com/design-system";
import type { FeaturedCaseStudiesModelFragment } from "@bashkim-com/prismic-dal";
import { useLinkResolver } from "@bashkim-com/prismic-helpers";
import { Button } from "@mui/material";

export type HomeFeaturedProps = {
  featuredCaseStudies: Array<FeaturedCaseStudiesModelFragment>;
};

export default function HomeFeatured({
  featuredCaseStudies,
}: HomeFeaturedProps) {
  const PrismicLinkResolver = useLinkResolver();

  return (
    <ul>
      {featuredCaseStudies.map(({ featured_case_study: caseStudy }) => {
        if (caseStudy.__typename !== "Case_study") {
          return null;
        }

        const {
          image_header_desktop: backgroundDesktop,
          image_header_mobile: backgroundMobile,
        } = caseStudy;

        return (
          <li key={caseStudy._meta.id}>
            <FullBannerPartial
              backgroundDesktop={backgroundDesktop?.url}
              backgroundMobile={backgroundMobile?.url}
              id={`HomePage-FullBannerPartial-${caseStudy._meta.id}`}
            >
              <RichTextFormatter>
                <h2>{caseStudy.meta_title}</h2>
                <p>{caseStudy.meta_description}</p>
              </RichTextFormatter>

              <Button
                variant="outlined"
                color="currentColor"
                href={PrismicLinkResolver({
                  type: "case_study",
                  uid: caseStudy._meta.uid,
                })}
              >
                Read case study
              </Button>
            </FullBannerPartial>
          </li>
        );
      })}
    </ul>
  );
}
