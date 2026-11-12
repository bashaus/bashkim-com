import { Metadata } from "next";
import { notFound } from "next/navigation";

import CaseStudyPageLockup from "@/domains/case-study-page/lockups/CaseStudyPageLockup";
import { getCaseStudyBody } from "@/domains/case-study-page/queries/get-case-study-body";
import { getCaseStudyPage } from "@/domains/case-study-page/queries/get-case-study-page";
import { getCaseStudySlugs } from "@/domains/case-study-page/queries/get-case-study-slugs";
import { Locale, locales } from "@/i18n/locale/locale";
import { getLocaleFromPath } from "@/i18n/locale/source/path/get";
import { getCaseStudyPath } from "@/libraries/app/navigation";
import { pathAsUrl } from "@/libraries/app/path-as-url";

export type CaseStudyPageParams = Readonly<{
  locale: Locale;
  caseStudySlug: string;
}>;

export type CaseStudyPageProps = Readonly<{
  params: Promise<CaseStudyPageParams>;
}>;

export const generateStaticParams = async () => {
  const params = [];

  const getCaseStudySlugsResult = await getCaseStudySlugs();
  const edges = getCaseStudySlugsResult.data?.caseStudies.edges ?? [];

  for (const locale of locales) {
    for (const caseStudy of edges) {
      const uid = caseStudy?.node._meta.uid;
      if (uid) {
        params.push({
          locale,
          caseStudySlug: caseStudy?.node._meta.uid ?? "",
        });
      }
    }
  }

  return params;
};

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const locale = await getLocaleFromPath().catch(() => notFound());
  const { caseStudySlug } = await params;

  const getCaseStudyPageResult = await getCaseStudyPage(caseStudySlug);
  const caseStudyPage =
    getCaseStudyPageResult.data?.caseStudyPage.edges?.[0]?.node;

  if (!caseStudyPage) {
    notFound();
  }

  return {
    title: caseStudyPage.meta_title,
    description: caseStudyPage.meta_description,
    alternates: {
      canonical: pathAsUrl(getCaseStudyPath({ locale, caseStudySlug })),
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { caseStudySlug } = await params;

  const caseStudyPagePromise = getCaseStudyPage(caseStudySlug);
  const caseStudyBodyPromise = getCaseStudyBody(caseStudySlug);

  const [caseStudyPageResult, caseStudyBodyResult] = await Promise.all([
    caseStudyPagePromise,
    caseStudyBodyPromise,
  ]);

  if (!caseStudyPageResult.data?.caseStudyPage) {
    notFound();
  }

  const caseStudyPage =
    caseStudyPageResult.data?.caseStudyPage.edges?.[0]?.node;

  const caseStudyBody =
    caseStudyBodyResult.data?.caseStudyBody.edges?.[0]?.node;

  if (!caseStudyPage || !caseStudyBody) {
    notFound();
  }

  return (
    <CaseStudyPageLockup
      caseStudyPage={caseStudyPage}
      caseStudyBody={caseStudyBody}
    />
  );
}
