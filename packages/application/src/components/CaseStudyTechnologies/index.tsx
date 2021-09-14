import type { CaseStudyContentType } from "@bashkim-com/prismic";

import styles from "./styles.module.scss";

export type CaseStudyTechnologiesProps = {
  caseStudy: CaseStudyContentType;
};

export const CaseStudyTechnologies = ({
  caseStudy,
}: CaseStudyTechnologiesProps): JSX.Element => (
  <div className={styles.CaseStudyTechnologies}>
    <h3>Key technologies</h3>

    <ul>
      {caseStudy.info_technologies.map((technology) => {
        if (!technology.info_technology) {
          return null;
        }

        const { technology_name: name, technology_icon: icon } =
          technology.info_technology;

        return (
          <li key={name}>
            <img src={icon.url} alt="" className={styles.TechnologyIcon} />
            <span className={styles.TechnologyName}>{name}</span>
          </li>
        );
      })}
    </ul>
  </div>
);
