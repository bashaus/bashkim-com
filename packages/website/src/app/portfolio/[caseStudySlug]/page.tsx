import { Metadata } from "next";

import { generateCanonical } from "../../../libraries/app/generateCanonical";
import { NotFoundError } from "../../../libraries/next/errors/NotFoundError";
import { CaseStudyPageLockup } from "../../../lockups/CaseStudyPage";
import { getPrismicBody, getPrismicPage, getPrismicSlugs } from "./queries";

export const generateStaticParams = async () => {
  const caseStudiesResult = await getPrismicSlugs();
  return caseStudiesResult.data.caseStudies.edges?.map((caseStudy) => ({
    caseStudySlug: caseStudy?.node._meta.uid,
  }));
};

export async function generateMetadata({ params }): Promise<Metadata> {
  const { caseStudySlug } = params;

  const result = await getPrismicPage(caseStudySlug);
  const caseStudyPage = result.data.caseStudyPage.edges?.[0]?.node;
  if (!caseStudyPage) {
    throw new NotFoundError();
  }

  return {
    title: caseStudyPage.meta_title,
    keywords: caseStudyPage.meta_keywords,
    description: caseStudyPage.meta_description,
    alternates: {
      canonical: generateCanonical(`/portfolio/${caseStudySlug}/`),
    },
  };
}

export async function CaseStudyPage({ params }) {
  const { caseStudySlug } = params;

  const caseStudyPagePromise = getPrismicPage(caseStudySlug);
  const caseStudyBodyPromise = getPrismicBody(caseStudySlug);

  const [caseStudyPageResult, caseStudyBodyResult] = await Promise.all([
    caseStudyPagePromise,
    caseStudyBodyPromise,
  ]);

  if (!caseStudyPageResult.data.caseStudyPage) {
    throw new NotFoundError();
  }

  const caseStudyPage = caseStudyPageResult.data.caseStudyPage.edges?.[0]?.node;
  const caseStudyBody = caseStudyBodyResult.data.caseStudyBody.edges?.[0]?.node;

  if (!caseStudyPage || !caseStudyBody) {
    throw new NotFoundError();
  }

  return (
    <CaseStudyPageLockup
      caseStudyPage={caseStudyPage}
      caseStudyBody={caseStudyBody}
    />
  );
}

export default CaseStudyPage;
