import { GetServerSideProps } from "next";
import React from "react";
import PrismicClient from "@bashkim-com/prismic";
import { PeerContentType, CaseStudyContentType } from "@bashkim-com/prismic";

import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse";
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

type CaseStudyPageProps = {
  caseStudy: CaseStudyContentType;
  peers: Array<PeerContentType>;
};

const CaseStudyPage = ({
  caseStudy,
  peers,
}: CaseStudyPageProps): JSX.Element => {
  const {
    body: bodySlices,
    accolades: accoladeSlices,
    collaborators: collaboratorSlices,
    exhibitions: exhibitionSlices,
  } = caseStudy.data;

  return (
    <LayoutDefault backButton={MenuBackButtonPortfolioImpl} theme="portfolio">
      <article itemScope itemType="http://schema.org/CreativeWork">
        <MetaTitle content={caseStudy.data.meta_title} />
        <MetaDescription content={caseStudy.data.meta_description} />
        <MetaKeywords content={caseStudy.data.meta_keywords} />

        {caseStudy.data.image_poster && caseStudy.data.image_poster.url && (
          <MetaImage
            url={caseStudy.data.image_poster.url}
            width={caseStudy.data.image_poster.dimensions.width}
            height={caseStudy.data.image_poster.dimensions.height}
          />
        )}

        <MetaCanonical href={`/portfolio/${caseStudy.uid}`} />

        <CaseStudyHeader caseStudy={caseStudy} />

        <section className="group">
          {bodySlices.map((slice, i) => (
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
              myRole={caseStudy.data.info_role}
              peers={peers}
              slices={collaboratorSlices}
            />
          </section>
        )}
      </article>
    </LayoutDefault>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, query } = context;
  const { caseStudySlug } = query;
  const prismicClient = PrismicClient(req);

  const caseStudy: CaseStudyContentType = (await prismicClient.getByUID(
    "case_study",
    `${caseStudySlug}`,
    {
      fetchLinks: [
        "peer.peer_name",
        "technology.technology_name",
        "technology.technology_icon",
      ],
    }
  )) as CaseStudyContentType;

  if (!caseStudy) {
    throw new NotFoundError();
  }

  const peerIDs: Array<string> = caseStudy.data.collaborators.map(
    (collaborator) => collaborator.primary.CollaboratorSliceType_Peer.id
  );

  const peersQuery: ApiSearchResponse = await prismicClient.getByIDs(peerIDs, {
    pageSize: 100,
  });

  return {
    props: {
      caseStudy,
      peers: peersQuery.results as Array<PeerContentType>,
    } as CaseStudyPageProps,
  };
};

export default CaseStudyPage;
