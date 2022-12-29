import type { Case_Study, Technology } from "@bashkim-com/prismic-dal";

import styles from "./CaseStudyTechnologies.module.scss";

export type CaseStudyTechnologiesProps = {
  caseStudy: Case_Study;
};

export const CaseStudyTechnologies = ({
  caseStudy,
}: CaseStudyTechnologiesProps) => (
  <>
    <h3 className={styles.Heading}>Key technologies</h3>

    <ul className={styles["Technologies"]}>
      {caseStudy.info_technologies.map((info_technology) => {
        if (!info_technology.info_technology) {
          return null;
        }

        const technology = info_technology.info_technology as Technology;
        const name = technology.technology_name;
        const icon = technology.technology_icon;

        return (
          <li className={styles["Technology"]} key={name}>
            <img className={styles["TechnologyIcon"]} src={icon.url} alt="" />
            <span className={styles["TechnologyName"]}>{name}</span>
          </li>
        );
      })}
    </ul>
  </>
);
