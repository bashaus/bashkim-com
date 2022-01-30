import * as S from "./styles";

export type VideoPlayerYouTubeProps = {
  /**
   * The title of the video for accessibility.
   */
  title?: string;

  /**
   * The `v` parameter in the URL of the YouTube video.
   */
  v: string;
};

export const VideoPlayerYouTube = ({
  title,
  v,
}: VideoPlayerYouTubeProps): JSX.Element => {
  const src = new URL(`https://www.youtube-nocookie.com/embed/${v}`);
  src.searchParams.append("rel", "0");
  src.searchParams.append("hd", "1");
  src.searchParams.append("showinfo", "0");
  src.searchParams.append("showsearch", "0");
  src.searchParams.append("iv_load_policy", "3");
  src.searchParams.append("modestbranding", "1");
  src.searchParams.append("enablejsapi", "1");
  src.searchParams.append("playsinline", "0");

  return (
    <S.VideoPlayerYouTube>
      <iframe allowFullScreen src={src.href} title={title} frameBorder={0} />
    </S.VideoPlayerYouTube>
  );
};
