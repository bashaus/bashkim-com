import { CallToAction, FullBannerPartial } from "@bashkim-com/design-system";
import { HomePageContentType, useLinkResolver } from "@bashkim-com/prismic";
import Link from "next/link";

export type HomeFeaturedProps = {
  caseStudies: HomePageContentType["featured_case_studies"];
};

export const HomeFeatured = ({ caseStudies }: HomeFeaturedProps) => {
  const PrismicLinkResolver = useLinkResolver();

  return (
    <ul>
      {caseStudies.map((featuredCaseStudy) => {
        const caseStudy = featuredCaseStudy.featured_case_study;

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
            </FullBannerPartial>
          </li>
        );
      })}
    </ul>
  );
};
