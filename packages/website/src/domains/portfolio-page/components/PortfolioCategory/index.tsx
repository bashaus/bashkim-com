import SubtitlePartial from "@bashkim-com/design-system/SubtitlePartial";
import type {
  Case_Study,
  PortfolioCategorySliceTypeFragment,
} from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

import PortfolioCaseStudyBrick from "@/domains/portfolio-page/components/PortfolioCaseStudyBrick";

export type PortfolioCategoryProps = Readonly<{
  portfolioCategory: PortfolioCategorySliceTypeFragment;
}>;

export default function PortfolioCategory({
  portfolioCategory,
}: PortfolioCategoryProps) {
  const { fields } = portfolioCategory;
  const {
    portfolio_category_slug: slug,
    portfolio_category_title: title,
    portfolio_category_description: description,
  } = portfolioCategory.primary ?? {};

  return (
    <>
      <SubtitlePartial id={slug ?? ""}>
        <PrismicRichText render={title} />
        <PrismicRichText render={description} />
      </SubtitlePartial>

      {fields && (
        <Container>
          <Grid container columnSpacing={2}>
            {fields.map(({ portfolio_category_case_study }) => {
              const caseStudy = portfolio_category_case_study as Case_Study;

              return (
                <Grid
                  size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}
                  key={caseStudy._meta.uid}
                >
                  <PortfolioCaseStudyBrick caseStudy={caseStudy} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
    </>
  );
}
