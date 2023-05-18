import { CallToAction, FullBannerPartial } from "@bashkim-com/design-system";
import type {
  Case_Study,
  Home_PageFeatured_Case_Studies,
} from "@bashkim-com/prismic-dal";
import { useLinkResolver } from "@bashkim-com/prismic-helpers";
import Link from "next/link";

export type HomeFeaturedProps = {
  caseStudies: Array<Home_PageFeatured_Case_Studies>;
};

export const HomeFeatured = ({ caseStudies }: HomeFeaturedProps) => {
  const PrismicLinkResolver = useLinkResolver();

  return (
    <ul>
      {caseStudies.map((featuredCaseStudy) => {
        const caseStudy = featuredCaseStudy.featured_case_study as Case_Study;

        const {
          image_header_desktop: backgroundDesktop,
          image_header_mobile: backgroundMobile,
        } = caseStudy;

        return (
          <li key={caseStudy._meta.id}>
            <FullBannerPartial
              backgroundDesktop={backgroundDesktop && backgroundDesktop.url}
              backgroundMobile={backgroundMobile && backgroundMobile.url}
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
