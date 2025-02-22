import type { Case_Study } from "@bashkim-com/prismic-dal";
import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";

export type PortfolioCaseStudyBrickProps = Readonly<{
  caseStudy: Case_Study;
}>;

export default function PortfolioCaseStudyBrick({
  caseStudy,
}: PortfolioCaseStudyBrickProps) {
  return (
    <Link href={`/portfolio/${caseStudy._meta.uid}`}>
      <S.Container>
        <S.Icon>
          <Image
            src={caseStudy.image_icon.url}
            alt={caseStudy.meta_title ?? ""}
            width={caseStudy.image_icon.dimensions.width}
            height={caseStudy.image_icon.dimensions.height}
            style={{ width: 64, height: 64, borderRadius: "50%" }}
          />
        </S.Icon>

        <S.Text
          primary={caseStudy.meta_title ?? ""}
          secondary={caseStudy.meta_description ?? ""}
        />
      </S.Container>
    </Link>
  );
}
