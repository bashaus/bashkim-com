import { ReactComponent as GitHubVector } from "../../assets/vectors/social/github.svg";
import { ReactComponent as LinkedInVector } from "../../assets/vectors/social/linked-in.svg";
import { ReactComponent as MediumVector } from "../../assets/vectors/social/medium.svg";
import { ReactComponent as StackOverflowVector } from "../../assets/vectors/social/stack-overflow.svg";
import * as S from "./NavigationSocial.styles";

export const NavigationSocial = () => (
  <S.NavigationSocial>
    <S.IconGitHub>
      <a
        href="https://github.com/bashaus?tab=repositories"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <GitHubVector />
        <span>GitHub</span>
      </a>
    </S.IconGitHub>

    <S.IconMedium>
      <a
        href="https://medium.com/@bashaus"
        target="_blank"
        rel="noreferrer"
        title="Medium"
      >
        <MediumVector />
        <span>Medium</span>
      </a>
    </S.IconMedium>

    <S.IconStackOverflow>
      <a
        href="https://stackoverflow.com/users/600240/bashaus"
        target="_blank"
        rel="noreferrer"
        title="StackOverflow"
      >
        <StackOverflowVector />
        <span>Stack Overflow</span>
      </a>
    </S.IconStackOverflow>

    <S.IconLinkedIn>
      <a
        href="https://www.linkedin.com/in/bashaus/"
        target="_blank"
        rel="noreferrer"
        title="Linked In"
      >
        <LinkedInVector />
        <span>Linked In</span>
      </a>
    </S.IconLinkedIn>
  </S.NavigationSocial>
);
