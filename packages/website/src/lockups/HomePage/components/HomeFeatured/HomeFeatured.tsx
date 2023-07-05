import { CallToAction, FullBannerPartial } from "@bashkim-com/design-system";
import type { FeaturedCaseStudiesModelFragment } from "@bashkim-com/prismic-dal";
import { useLinkResolver } from "@bashkim-com/prismic-helpers";
import Link from "next/link";

export type HomeFeaturedProps = {
  featuredCaseStudies: Array<FeaturedCaseStudiesModelFragment>;
};

export const HomeFeatured = ({ featuredCaseStudies }: HomeFeaturedProps) => {
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
              <h2>{caseStudy.meta_title}</h2>
              <p>{caseStudy.meta_description}</p>
              <CallToAction>
                <Link
                  href={PrismicLinkResolver({
                    type: "case_study",
                    uid: caseStudy._meta.uid,
                  })}
                >
                  <span>Read case study</span>
                </Link>
              </CallToAction>
            </FullBannerPartial>
          </li>
        );
      })}
    </ul>
  );
};
