import { Metadata } from "next";
import { notFound } from "next/navigation";

import CaseStudyPageLockup from "@/domains/case-study-page/components/CaseStudyPageLockup";
import generateCanonical from "@/libraries/app/generate-canonical";

import { getPrismicBody, getPrismicPage, getPrismicSlugs } from "./queries";

export type CaseStudyPageProps = Readonly<{
  params: Promise<{ caseStudySlug: string }>;
}>;

export const generateStaticParams = async () => {
  const caseStudiesResult = await getPrismicSlugs();
  const edges = caseStudiesResult.data.caseStudies.edges ?? [];
  return edges.map((caseStudy) => ({
    caseStudySlug: caseStudy?.node._meta.uid ?? "",
  }));
};

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { caseStudySlug } = await params;

  const result = await getPrismicPage(caseStudySlug);
  const caseStudyPage = result.data.caseStudyPage.edges?.[0]?.node;
  if (!caseStudyPage) {
    notFound();
  }

  return {
    title: caseStudyPage.meta_title,
    description: caseStudyPage.meta_description,
    alternates: {
      canonical: generateCanonical(`/portfolio/${caseStudySlug}`),
    },
  };
}

const CaseStudyPage = async ({ params }: CaseStudyPageProps) => {
  const { caseStudySlug } = await params;

  const caseStudyPagePromise = getPrismicPage(caseStudySlug);
  const caseStudyBodyPromise = getPrismicBody(caseStudySlug);

  const [caseStudyPageResult, caseStudyBodyResult] = await Promise.all([
    caseStudyPagePromise,
    caseStudyBodyPromise,
  ]);

  if (!caseStudyPageResult.data.caseStudyPage) {
    notFound();
  }

  const caseStudyPage = caseStudyPageResult.data.caseStudyPage.edges?.[0]?.node;
  const caseStudyBody = caseStudyBodyResult.data.caseStudyBody.edges?.[0]?.node;

  if (!caseStudyPage || !caseStudyBody) {
    notFound();
  }

  return (
    <CaseStudyPageLockup
      caseStudyPage={caseStudyPage}
      caseStudyBody={caseStudyBody}
    />
  );
};

export default CaseStudyPage;
