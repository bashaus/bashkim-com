import styles from "./styles.module.scss";

type VideoPlayerYouTubeProps = {
  title?: string;
  v: string;
};

const VideoPlayerYouTube = (props: VideoPlayerYouTubeProps): JSX.Element => {
  const { title, v } = props;

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
    <div className={styles.VideoPlayerYouTube}>
      <iframe allowFullScreen src={src.href} title={title} frameBorder={0} />
    </div>
  );
};

export default VideoPlayerYouTube;
