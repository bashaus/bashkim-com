import Link from "next/link";

import { CallToAction, PartialFullBanner } from "@bashkim-com/design-system";

import type { HomePageContentType } from "@bashkim-com/prismic";
import { PrismicLinkResolver } from "%libraries/prismic/helpers/Link";

export type HomeFeaturedProps = {
  caseStudies: HomePageContentType["featured_case_studies"];
};

export const HomeFeatured = ({
  caseStudies,
}: HomeFeaturedProps): JSX.Element => (
  <ul>
    {caseStudies.map((featuredCaseStudy) => {
      const caseStudy = featuredCaseStudy.featured_case_study;

      const {
        image_header_desktop: backgroundDesktop,
        image_header_mobile: backgroundMobile,
      } = caseStudy;

      return (
        <li key={caseStudy._meta.id}>
          <PartialFullBanner
            backgroundDesktop={backgroundDesktop && backgroundDesktop.url}
            backgroundMobile={backgroundMobile && backgroundMobile.url}
            id={`HomePage-PartialFullBanner-${caseStudy._meta.id}`}
          >
            <h3>{caseStudy.meta_title}</h3>
            <p>{caseStudy.meta_description}</p>
            <CallToAction>
              <Link
                href="/portfolio/[caseStudySlug]/"
                as={PrismicLinkResolver({
                  type: "case_study",
                  uid: caseStudy._meta.uid,
                })}
              >
                <a>
                  <span>Read case study</span>
                </a>
              </Link>
            </CallToAction>
          </PartialFullBanner>
        </li>
      );
    })}
  </ul>
);
