"use client";

import { Group, GroupDesign } from "@bashkim-com/design-system";
import {
  CaseStudyBodyModelFragment,
  CaseStudyPageModelFragment,
} from "@bashkim-com/prismic-dal";

import Header from "@/components/Header";
import HeaderActionPortfolio from "@/components/HeaderActionPortfolio";
import Page from "@/components/Page";
import Slice from "@/components/Slice";
import CaseStudyAccolades from "@/domains/case-study-page/components/CaseStudyAccolades";
import CaseStudyCollaborators from "@/domains/case-study-page/components/CaseStudyCollaborators";
import CaseStudyExhibitions from "@/domains/case-study-page/components/CaseStudyExhibitions";
import CaseStudyHeader from "@/domains/case-study-page/components/CaseStudyHeader";

export type CaseStudyPageProps = Readonly<{
  caseStudyPage: CaseStudyPageModelFragment;
  caseStudyBody: CaseStudyBodyModelFragment;
}>;

export default function CaseStudyPageLockup({
  caseStudyPage,
  caseStudyBody,
}: CaseStudyPageProps) {
  const {
    accolades: accoladeSlices,
    collaborators: collaboratorSlices,
    exhibitions: exhibitionSlices,
  } = caseStudyPage;

  return (
    <Page>
      <Header backButton={<HeaderActionPortfolio />} />
      <article itemScope itemType="https://schema.org/CreativeWork">
        <CaseStudyHeader caseStudy={caseStudyPage} />

        <Group>
          {caseStudyBody.body?.map((slice) => (
            <Slice slice={slice} key={JSON.stringify(slice)} />
          ))}
        </Group>

        {exhibitionSlices?.length > 0 && (
          <Group design={GroupDesign.Alternate}>
            <CaseStudyExhibitions slices={exhibitionSlices} />
          </Group>
        )}

        {accoladeSlices?.length > 0 && (
          <Group design={GroupDesign.Alternate}>
            <CaseStudyAccolades slices={accoladeSlices} />
          </Group>
        )}

        {collaboratorSlices?.length > 0 && (
          <Group design={GroupDesign.Alternate}>
            <CaseStudyCollaborators
              myRole={caseStudyPage.info_role || undefined}
              slices={collaboratorSlices}
            />
          </Group>
        )}
      </article>
    </Page>
  );
}
