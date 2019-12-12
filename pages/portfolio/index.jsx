import getCookies from 'next-cookies';
import Prismic from 'prismic-javascript';
import PropTypes from 'prop-types';
import React from 'react';

import LayoutDefault from '%components/LayoutDefault';
import MenuBackButtonHomeImpl from '%components/MenuBackButtonHomeImpl';
import MetaDescription from '%components/MetaDescription';
import MetaKeywords from '%components/MetaKeywords';
import MetaTitle from '%components/MetaTitle';
import PartialHeaderText from '%components/PartialHeaderText';
import PartialSubtitle from '%components/PartialSubtitle';
import PortfolioFeaturedCaseStudies from '%components/PortfolioFeaturedCaseStudies';
import PortfolioSearch from '%components/PortfolioSearch';
import PortfolioListStore from '%contexts/PortfolioList';

import { getCaseStudies } from '%prismic/content-types/case_study/api';
import { getTechnologies } from '%prismic/content-types/technology/api';
import { getPortfolioPage } from '%prismic/content-types/portfolio_page/api';

export default function PortfolioPage(props) {
  const { caseStudies, page, technologies } = props;
  const {
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: metaKeywords,
    featured,
  } = page.data;

  return (
    <>
      <MetaTitle content={metaTitle} />
      <MetaDescription content={metaDescription} />
      <MetaKeywords content={metaKeywords} />

      <PartialHeaderText>
        <h1>{metaTitle}</h1>
        <p>{metaDescription}</p>
      </PartialHeaderText>

      <section className="group-alternate">
        <PartialSubtitle>
          <h2>Featured case studies</h2>
        </PartialSubtitle>
        <PortfolioFeaturedCaseStudies featured={featured} />
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>All case studies</h2>
        </PartialSubtitle>

        <PortfolioListStore
          caseStudies={caseStudies}
          technologies={technologies}
        >
          <PortfolioSearch />
        </PortfolioListStore>
      </section>
    </>
  );
}

PortfolioPage.propTypes = {
  caseStudies: PropTypes.array.isRequired,
  page: PropTypes.object.isRequired,
  technologies: PropTypes.array.isRequired,
};

PortfolioPage.getInitialProps = async (context) => {
  const cookies = getCookies(context);
  const ref = cookies[Prismic.previewCookie];

  const caseStudiesQuery = await getCaseStudies({ pageSize: 100 });
  const technologiesQuery = await getTechnologies({ pageSize: 100 });
  const page = await getPortfolioPage({ ref });

  return {
    caseStudies: caseStudiesQuery.results,
    page,
    technologies: technologiesQuery.results.map(result => ({
      id: { type: 'technology', value: result.id },
      name: result.data.technology_name,
    })),
  };
};

PortfolioPage.getLayout = function PortfolioLayout(page) {
  return (
    <LayoutDefault backButton={MenuBackButtonHomeImpl} theme="portfolio">
      { page }
    </LayoutDefault>
  );
};
