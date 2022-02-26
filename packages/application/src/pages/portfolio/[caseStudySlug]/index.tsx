import { Group, GroupDesign } from "@bashkim-com/design-system";
import type { CaseStudyContentType } from "@bashkim-com/prismic";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import { CaseStudyAccolades } from "%components/CaseStudyAccolades";
import { CaseStudyCollaborators } from "%components/CaseStudyCollaborators";
import { CaseStudyExhibitions } from "%components/CaseStudyExhibitions";
import { CaseStudyHeader } from "%components/CaseStudyHeader";
import { MenuButtonPortfolio } from "%components/MenuButtonPortfolio";
import { MetaCanonical } from "%components/MetaCanonical";
import { MetaDescription } from "%components/MetaDescription";
import { MetaImage } from "%components/MetaImage";
import { MetaKeywords } from "%components/MetaKeywords";
import { MetaTitle } from "%components/MetaTitle";
import { Page } from "%components/Page";
import { Slice } from "%components/Slice";
import { NotFoundError } from "%libraries/next/errors/NotFoundError";
import { PrismicClient } from "%libraries/prismic/client";
import { CaseStudiesQuery } from "%libraries/prismic/queries/CaseStudiesQuery";
import { CaseStudyBodyQuery } from "%libraries/prismic/queries/CaseStudyBodyQuery";
import { CaseStudyPageQuery } from "%libraries/prismic/queries/CaseStudyPageQuery";

type CaseStudyPageProps = {
  caseStudyPage: CaseStudyContentType;
  caseStudyBody: CaseStudyContentType;
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
      <article itemScope itemType="http://schema.org/CreativeWork">
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
          {caseStudyBody.body.map((slice, i) => (
            <Slice slice={slice} key={i} />
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
  const caseStudiesResult = await PrismicClient.query({
    query: CaseStudiesQuery,
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

  const caseStudyPagePromise = PrismicClient.query({
    query: CaseStudyPageQuery,
    variables: {
      caseStudySlug,
    },
  });

  const caseStudyBodyPromise = PrismicClient.query({
    query: CaseStudyBodyQuery,
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
