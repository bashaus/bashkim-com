"use client";

import { Group, GroupDesign } from "@bashkim-com/design-system";
import {
  CaseStudyBodyModelFragment,
  CaseStudyPageModelFragment,
} from "@bashkim-com/prismic-dal";

import MenuButtonPortfolio from "../../../../components/MenuButtonPortfolio";
import Page from "../../../../components/Page";
import Slice from "../../../../components/Slice";
import CaseStudyAccolades from "../CaseStudyAccolades";
import CaseStudyCollaborators from "../CaseStudyCollaborators";
import CaseStudyExhibitions from "../CaseStudyExhibitions";
import CaseStudyHeader from "../CaseStudyHeader";

export type CaseStudyPageProps = {
  caseStudyPage: CaseStudyPageModelFragment;
  caseStudyBody: CaseStudyBodyModelFragment;
};

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
    <Page backButton={<MenuButtonPortfolio />}>
      <article itemScope itemType="https://schema.org/CreativeWork">
        <CaseStudyHeader caseStudy={caseStudyPage} />

        <Group>
          {caseStudyBody.body?.map((slice) => (
            <Slice slice={slice} key={JSON.stringify(slice)} />
          ))}
        </Group>

        {exhibitionSlices?.length > 0 && (
          <Group design={GroupDesign.ALTERNATE}>
            <CaseStudyExhibitions slices={exhibitionSlices} />
          </Group>
        )}

        {accoladeSlices?.length > 0 && (
          <Group design={GroupDesign.ALTERNATE}>
            <CaseStudyAccolades slices={accoladeSlices} />
          </Group>
        )}

        {collaboratorSlices?.length > 0 && (
          <Group design={GroupDesign.ALTERNATE}>
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
