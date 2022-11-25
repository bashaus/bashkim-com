import * as S from "./Tile.styles";

export type TileProps = {
  description: string;
  icon: string;
  poster: string;
  title: string;
};

export const Tile = ({ description, title, icon, poster }: TileProps) => (
  <S.Tile>
    <S.Poster
      style={{
        backgroundImage: `url(${poster})`,
      }}
    />

    <S.Content>
      <S.Heading>{title}</S.Heading>

      <S.Icon>
        <img alt="" src={icon} />
      </S.Icon>

      <S.Description>{description}</S.Description>
    </S.Content>
  </S.Tile>
);
