import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import { PrismicClient } from "@bashkim-com/prismic";
import type { CaseStudyContentType } from "@bashkim-com/prismic";

import CaseStudyAccolades from "%components/CaseStudyAccolades";
import CaseStudyCollaborators from "%components/CaseStudyCollaborators";
import CaseStudyExhibitions from "%components/CaseStudyExhibitions";
import CaseStudyHeader from "%components/CaseStudyHeader";
import LayoutDefault from "%components/LayoutDefault";
import MenuBackButtonPortfolioImpl from "%components/MenuBackButtonPortfolioImpl";
import MetaCanonical from "%components/MetaCanonical";
import MetaDescription from "%components/MetaDescription";
import MetaImage from "%components/MetaImage";
import MetaKeywords from "%components/MetaKeywords";
import MetaTitle from "%components/MetaTitle";
import Slice from "%components/Slice";

import NotFoundError from "%libraries/next/errors/NotFoundError";

import { CaseStudyPageQuery } from "%prismic/queries/CaseStudyPageQuery";
import { CaseStudyBodyQuery } from "%prismic/queries/CaseStudyBodyQuery";
import { CaseStudiesQuery } from "%prismic/queries/CaseStudiesQuery";

type CaseStudyPageProps = {
  caseStudyPage: CaseStudyContentType;
  caseStudyBody: any;
};

const CaseStudyPage = ({
  caseStudyPage,
  caseStudyBody,
}: CaseStudyPageProps): JSX.Element => {
  const {
    accolades: accoladeSlices,
    collaborators: collaboratorSlices,
    exhibitions: exhibitionSlices,
  } = caseStudyPage;

  return (
    <LayoutDefault backButton={MenuBackButtonPortfolioImpl} theme="portfolio">
      <article itemScope itemType="http://schema.org/CreativeWork">
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

        <MetaCanonical href={`/portfolio/${caseStudyPage._meta.uid}`} />

        <CaseStudyHeader caseStudy={caseStudyPage} />

        <section className="group">
          {caseStudyBody.body.map((slice, i) => (
            <Slice slice={slice} key={i} />
          ))}
        </section>

        {exhibitionSlices && exhibitionSlices.length > 0 && (
          <section className="group-alternate">
            <CaseStudyExhibitions slices={exhibitionSlices} />
          </section>
        )}

        {accoladeSlices && accoladeSlices.length > 0 && (
          <section className="group-alternate">
            <CaseStudyAccolades slices={accoladeSlices} />
          </section>
        )}

        {collaboratorSlices && collaboratorSlices.length > 0 && (
          <section className="group-alternate">
            <CaseStudyCollaborators
              myRole={caseStudyPage.info_role}
              slices={collaboratorSlices}
            />
          </section>
        )}
      </article>
    </LayoutDefault>
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
