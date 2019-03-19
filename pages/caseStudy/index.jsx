import getCookies from 'next-cookies';
import Prismic from 'prismic-javascript';
import PropTypes from 'prop-types';
import React from 'react';

import CaseStudyAccolades from '%components/CaseStudyAccolades';
import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyExhibitions from '%components/CaseStudyExhibitions';
import CaseStudyHeader from '%components/CaseStudyHeader';
import LayoutDefault from '%components/LayoutDefault';
import MenuBackButtonPortfolioImpl from '%components/MenuBackButtonPortfolioImpl';
import MetaCanonical from '%components/MetaCanonical';
import MetaDescription from '%components/MetaDescription';
import MetaImage from '%components/MetaImage';
import MetaKeywords from '%components/MetaKeywords';
import MetaTitle from '%components/MetaTitle';
import Slice from '%components/Slice';

import NotFoundError from '%libraries/next/errors/NotFoundError';

import { getCaseStudy } from '%prismic/content-types/case_study/api';
import { getPeers } from '%prismic/content-types/peer/api';

import CaseStudyContentPropType from '%prismic/content-types/case_study/prop-type';
import PeerContentPropType from '%prismic/content-types/peer/prop-type';

export default function CaseStudyPage(props) {
  const { caseStudy, peers } = props;

  const {
    body: bodySlices,
    accolades: accoladeSlices,
    collaborators: collaboratorSlices,
    exhibitions: exhibitionSlices,
  } = caseStudy.data;

  return (
    <LayoutDefault backButton={MenuBackButtonPortfolioImpl} theme="portfolio">
      <MetaTitle content={caseStudy.data.meta_title} />
      <MetaDescription content={caseStudy.data.meta_description} />
      <MetaKeywords content={caseStudy.data.meta_keywords} />
      <MetaImage image={caseStudy.data.image_poster.url} />
      <MetaCanonical href={`/portfolio/${caseStudy.uid}`} />

      <article itemScope itemType="http://schema.org/CreativeWork">
        <CaseStudyHeader caseStudy={caseStudy} />

        <section className="group">
          { bodySlices.map((slice, i) => (
            <Slice slice={slice} key={i} />
          )) }
        </section>

        { exhibitionSlices && (exhibitionSlices.length > 0) && (
          <section className="group-alternate">
            <CaseStudyExhibitions slices={exhibitionSlices} />
          </section>
        ) }

        { accoladeSlices && (accoladeSlices.length > 0) && (
          <section className="group-alternate">
            <CaseStudyAccolades slices={accoladeSlices} />
          </section>
        ) }

        { collaboratorSlices && (collaboratorSlices.length > 0) && (
          <section className="group-alternate">
            <CaseStudyCollaborators
              myRole={caseStudy.data.info_role}
              peers={peers}
              slices={collaboratorSlices}
            />
          </section>
        ) }
      </article>
    </LayoutDefault>
  );
}

CaseStudyPage.getInitialProps = async (context) => {
  const { caseStudySlug } = context.query;
  const cookies = getCookies(context);
  const ref = cookies[Prismic.previewCookie];
  const caseStudy = await getCaseStudy(caseStudySlug, { ref });

  if (!caseStudy) {
    throw new NotFoundError();
  }

  const peers = (await getPeers(
    caseStudy.data.collaborators.map(
      (collaborator) => collaborator.primary.CollaboratorSliceType_Peer.id,
    ),
    { pageSize: 100 },
  ));

  return {
    caseStudy,
    peers: peers.results,
  };
};

CaseStudyPage.propTypes = {
  caseStudy: CaseStudyContentPropType.isRequired,
  peers: PropTypes.arrayOf(PeerContentPropType).isRequired,
};
