"use client";

import { Group, GroupDesign } from "@bashkim-com/design-system";
import {
  CaseStudyBodyModelFragment,
  CaseStudyPageModelFragment,
} from "@bashkim-com/prismic-dal";

import { MenuButtonPortfolio } from "../../components/MenuButtonPortfolio/MenuButtonPortfolio";
import { Page } from "../../components/Page/Page";
import { Slice } from "../../components/Slice/Slice";
import { CaseStudyAccolades } from "./components/CaseStudyAccolades/CaseStudyAccolades";
import { CaseStudyCollaborators } from "./components/CaseStudyCollaborators/CaseStudyCollaborators";
import { CaseStudyExhibitions } from "./components/CaseStudyExhibitions/CaseStudyExhibitions";
import { CaseStudyHeader } from "./components/CaseStudyHeader/CaseStudyHeader";

export type CaseStudyPageProps = {
  caseStudyPage: CaseStudyPageModelFragment;
  caseStudyBody: CaseStudyBodyModelFragment;
};

export const CaseStudyPageLockup = ({
  caseStudyPage,
  caseStudyBody,
}: CaseStudyPageProps) => {
  const {
    accolades: accoladeSlices,
    collaborators: collaboratorSlices,
    exhibitions: exhibitionSlices,
  } = caseStudyPage;

  return (
    <Page backButton={MenuButtonPortfolio}>
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
};
