import Group from "@bashkim-com/design-system/Group";
import PageHeaderPartial from "@bashkim-com/design-system/PageHeaderPartial";
import TitlePartial from "@bashkim-com/design-system/TitlePartial";
import type { CaseStudyPageModelFragment } from "@bashkim-com/prismic-dal";
import Stack from "@mui/material/Stack";
import Image from "next/image";

import CaseStudyDetails from "@/domains/case-study-page/components/CaseStudyDetails";
import CaseStudyTechnologies from "@/domains/case-study-page/components/CaseStudyTechnologies";

import CaseStudyOutcomes from "../CaseStudyOutcomes";

export type CaseStudyHeaderProps = Readonly<{
  caseStudy: CaseStudyPageModelFragment;
}>;

export default function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  return (
    <>
      <PageHeaderPartial
        imageDesktop={caseStudy.image_header_desktop?.url}
        imageMobile={caseStudy.image_header_mobile?.url}
      />

      <Group>
        <TitlePartial
          title={caseStudy.meta_title}
          subtitle={caseStudy.meta_description}
          image={
            <Image
              src={caseStudy.image_icon.url}
              alt={caseStudy.image_icon.alt ?? ""}
              width={caseStudy.image_icon.dimensions.width}
              height={caseStudy.image_icon.dimensions.height}
            />
          }
        />
      </Group>

      <Group design="alternate">
        <Stack spacing={10}>
          <CaseStudyTechnologies caseStudy={caseStudy} />
          <CaseStudyDetails caseStudy={caseStudy} />
          <CaseStudyOutcomes caseStudy={caseStudy} />
        </Stack>
      </Group>
    </>
  );
}
