import * as S from "./Brick.styles";

export type BrickProps = {
  /**
   * The description text, will be wrapped in a `<p>` tag
   */
  description?: string;

  /**
   * A URL to the image to use as the icon
   */
  icon: string;

  /**
   * The title or heading, will be wrapped in a `<h3>` tag
   */
  title?: string;
};

export const Brick = ({ description, icon, title }: BrickProps) => (
  <S.Brick>
    <S.Content>
      <S.Heading>{title}</S.Heading>

      <S.Image>
        <img alt="" src={icon} />
      </S.Image>

      {description && <S.Description>{description}</S.Description>}
    </S.Content>
  </S.Brick>
);
