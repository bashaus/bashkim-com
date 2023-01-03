import { Group, GroupDesign } from "@bashkim-com/design-system";
import {
  Case_Study,
  CaseStudiesDocument,
  CaseStudiesQuery,
  CaseStudyBodyDocument,
  CaseStudyBodyQuery,
  CaseStudyPageDocument,
  CaseStudyPageQuery,
} from "@bashkim-com/prismic-dal";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import { CaseStudyAccolades } from "../../../components/CaseStudyAccolades/CaseStudyAccolades";
import { CaseStudyCollaborators } from "../../../components/CaseStudyCollaborators/CaseStudyCollaborators";
import { CaseStudyExhibitions } from "../../../components/CaseStudyExhibitions/CaseStudyExhibitions";
import { CaseStudyHeader } from "../../../components/CaseStudyHeader/CaseStudyHeader";
import { MenuButtonPortfolio } from "../../../components/MenuButtonPortfolio/MenuButtonPortfolio";
import { MetaCanonical } from "../../../components/MetaCanonical/MetaCanonical";
import { MetaDescription } from "../../../components/MetaDescription/MetaDescription";
import { MetaImage } from "../../../components/MetaImage/MetaImage";
import { MetaKeywords } from "../../../components/MetaKeywords/MetaKeywords";
import { MetaTitle } from "../../../components/MetaTitle/MetaTitle";
import { Page } from "../../../components/Page/Page";
import { Slice } from "../../../components/Slice/Slice";
import { NotFoundError } from "../../../libraries/next/errors/NotFoundError";
import { prismicClient } from "../../../libraries/prismic/PrismicClient";

type CaseStudyPageProps = {
  caseStudyPage: Case_Study;
  caseStudyBody: Case_Study;
};

const CaseStudyPage = ({
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
        <MetaCanonical href={`/portfolio/${caseStudyPage._meta.uid}/`} />
        <MetaTitle content={caseStudyPage.meta_title} />
        <MetaDescription content={caseStudyPage.meta_description} />
        <MetaKeywords content={caseStudyPage.meta_keywords} />

        {caseStudyPage.image_poster && caseStudyPage.image_poster.url && (
          <MetaImage
            url={caseStudyPage.image_poster.url}
            width={caseStudyPage.image_poster.dimensions.width}
            height={caseStudyPage.image_poster.dimensions.height}
          />
        )}

        <CaseStudyHeader caseStudy={caseStudyPage} />

        <Group>
          {caseStudyBody.body.map((slice) => (
            <Slice slice={slice} key={JSON.stringify(slice)} />
          ))}
        </Group>

        {exhibitionSlices && exhibitionSlices.length > 0 && (
          <Group design={GroupDesign.ALTERNATE}>
            <CaseStudyExhibitions slices={exhibitionSlices} />
          </Group>
        )}

        {accoladeSlices && accoladeSlices.length > 0 && (
          <Group design={GroupDesign.ALTERNATE}>
            <CaseStudyAccolades slices={accoladeSlices} />
          </Group>
        )}

        {collaboratorSlices && collaboratorSlices.length > 0 && (
          <Group design={GroupDesign.ALTERNATE}>
            <CaseStudyCollaborators
              myRole={caseStudyPage.info_role}
              slices={collaboratorSlices}
            />
          </Group>
        )}
      </article>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const caseStudiesResult = await prismicClient.query<CaseStudiesQuery>({
    query: CaseStudiesDocument,
  });

  return {
    fallback: false,
    paths: caseStudiesResult.data.caseStudies.edges.map((caseStudy) => ({
      params: { caseStudySlug: caseStudy.node._meta.uid },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { caseStudySlug } = context.params;

  const caseStudyPagePromise = prismicClient.query<CaseStudyPageQuery>({
    query: CaseStudyPageDocument,
    variables: {
      caseStudySlug,
    },
  });

  const caseStudyBodyPromise = prismicClient.query<CaseStudyBodyQuery>({
    query: CaseStudyBodyDocument,
    variables: {
      caseStudySlug,
    },
  });

  const [caseStudyPageResult, caseStudyBodyResult] = await Promise.all([
    caseStudyPagePromise,
    caseStudyBodyPromise,
  ]);

  if (!caseStudyPageResult.data.caseStudyPage) {
    throw new NotFoundError();
  }

  return {
    props: {
      caseStudyPage: caseStudyPageResult.data.caseStudyPage.edges[0].node,
      caseStudyBody: caseStudyBodyResult.data.caseStudyBody.edges[0].node,
    } as CaseStudyPageProps,
  };
};

export default CaseStudyPage;
