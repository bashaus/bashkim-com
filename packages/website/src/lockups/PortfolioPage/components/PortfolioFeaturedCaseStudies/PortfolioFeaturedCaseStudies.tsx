import { RichTextFormatter, Tile } from "@bashkim-com/design-system";
import type {
  Case_Study,
  PortfolioPageFeaturedModelFragment,
} from "@bashkim-com/prismic-dal";
import { PrismicRichText } from "@bashkim-com/prismic-helpers";
import Image from "next/image";
import Link from "next/link";

import styles from "./PortfolioFeaturedCaseStudies.module.scss";

export type PortfolioFeaturedCaseStudiesProps = {
  featured: Array<PortfolioPageFeaturedModelFragment>;
};

export const PortfolioFeaturedCaseStudies = ({
  featured,
}: PortfolioFeaturedCaseStudiesProps) => (
  <ul className={styles["PortfolioFeaturedCaseStudies"]}>
    {featured.map((feature) => {
      const title = feature.featured_title;
      const description = feature.featured_description;
      const caseStudy = feature.featured_case_study as Case_Study;

      return (
        <li
          className={styles["PortfolioFeaturedCaseStudy"]}
          key={caseStudy._meta.id}
        >
          <div className={styles["Details"]}>
            <RichTextFormatter>
              <PrismicRichText render={title} />
              <PrismicRichText render={description} />
            </RichTextFormatter>
          </div>

          <Link
            href={`/portfolio/${caseStudy._meta.uid}`}
            className={styles["Tile"]}
          >
            <Tile
              title={caseStudy.meta_title ?? ""}
              description={caseStudy.meta_description ?? ""}
              icon={
                <Image
                  src={caseStudy.image_icon.url}
                  alt={caseStudy.image_icon.alt}
                  width={caseStudy.image_icon.dimensions.width}
                  height={caseStudy.image_icon.dimensions.height}
                />
              }
              poster={caseStudy.image_poster.url}
            />
          </Link>
        </li>
      );
    })}
  </ul>
);
