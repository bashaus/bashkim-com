import type {
  CaseStudyPageModelFragment,
  Technology,
} from "@bashkim-com/prismic-dal";
import Image from "next/image";

import styles from "./styles.module.scss";

export type CaseStudyTechnologiesProps = Readonly<{
  caseStudy: CaseStudyPageModelFragment;
}>;

export default function CaseStudyTechnologies({
  caseStudy,
}: CaseStudyTechnologiesProps) {
  if (!caseStudy.info_technologies) {
    return null;
  }

  return (
    <>
      <h3 className={styles["Heading"]}>Key technologies</h3>

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
              <Image
                className={styles["TechnologyIcon"]}
                width={icon.dimensions.width}
                height={icon.dimensions.height}
                src={icon.url}
                alt={name ?? ""}
              />
              <span className={styles["TechnologyName"]}>{name}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
