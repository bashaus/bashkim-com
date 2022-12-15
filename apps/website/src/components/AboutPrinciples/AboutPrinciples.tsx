import { Group, SubtitlePartial } from "@bashkim-com/design-system";

import { ReactComponent as EthicallyVector } from "../../assets/vectors/principles/ethically.svg";
import { ReactComponent as MaintainableVector } from "../../assets/vectors/principles/maintainable.svg";
import { ReactComponent as OnTimeVector } from "../../assets/vectors/principles/on-time.svg";
import { ReactComponent as RobustVector } from "../../assets/vectors/principles/robust.svg";
import { ReactComponent as SecurelyVector } from "../../assets/vectors/principles/securely.svg";
import { ReactComponent as ToSatisfactionVector } from "../../assets/vectors/principles/to-satisfaction.svg";
import { ReactComponent as ToSpecificationVector } from "../../assets/vectors/principles/to-specification.svg";
import { ReactComponent as WithinBudgetVector } from "../../assets/vectors/principles/within-budget.svg";
import * as S from "./AboutPrinciples.styles";

export const AboutPrinciples = () => (
  <Group>
    <SubtitlePartial>
      <h2>Core principles</h2>
    </SubtitlePartial>

    <S.Principles>
      <S.Principle>
        <S.Cell>
          <h3>On-time</h3>
          <OnTimeVector />
          <p>
            Committed to delivering a resolved product to an
            agreed&nbsp;schedule
          </p>
        </S.Cell>
      </S.Principle>
      <S.Principle>
        <S.Cell>
          <h3>Within budget</h3>
          <WithinBudgetVector />
          <p>
            Because all financial investments are a risk, there needs to be a
            responsibility to&nbsp;deliver
          </p>
        </S.Cell>
      </S.Principle>
      <S.Principle>
        <S.Cell>
          <h3>To specification</h3>
          <ToSpecificationVector />
          <p>
            Producing exactly what everyone agrees to the highest
            possible&nbsp;standards
          </p>
        </S.Cell>
      </S.Principle>
      <S.Principle>
        <S.Cell>
          <h3>To satisfaction</h3>
          <ToSatisfactionVector />
          <p>
            Software is designed for people, so let&apos;s put a&nbsp;smile on
            our client&apos;s customers&apos;&nbsp;faces
          </p>
        </S.Cell>
      </S.Principle>
      <S.Principle>
        <S.Cell>
          <h3>Maintainable</h3>
          <MaintainableVector />
          <p>
            Everyone who works on the project also has to fall in love with the
            code&nbsp;too
          </p>
        </S.Cell>
      </S.Principle>
      <S.Principle>
        <S.Cell>
          <h3>Securely</h3>
          <SecurelyVector />
          <p>
            No client wants media attention for the wrong reasons, especially
            because of your&nbsp;work
          </p>
        </S.Cell>
      </S.Principle>
      <S.Principle>
        <S.Cell>
          <h3>Ethically</h3>
          <EthicallyVector />
          <p>
            Projects must increase the quality of life for all&nbsp;stakeholders
          </p>
        </S.Cell>
      </S.Principle>
      <S.Principle>
        <S.Cell>
          <h3>Robust</h3>
          <RobustVector />
          <p>
            Responsible testing methodologies accompanied with continuous
            integration and automated&nbsp;deployment
          </p>
        </S.Cell>
      </S.Principle>
    </S.Principles>
  </Group>
);
