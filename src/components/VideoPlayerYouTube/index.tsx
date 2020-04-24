import QueryString from 'querystring';
import React from 'react';

import styles from './styles.module.scss';

interface VideoPlayerYouTubeProps {
  title?: string;
  v: string;
}

const VideoPlayerYouTube = ({
  title,
  v,
}: VideoPlayerYouTubeProps): JSX.Element => {
  const iframeSrc = `https://www.youtube-nocookie.com/embed/${v}?${QueryString.stringify(
    {
      rel: '0',
      hd: '1',
      showinfo: '0',
      showsearch: '0',
      iv_load_policy: '3',
      modestbranding: '1',
      enablejsapi: '1',
      playsinline: '0',
    },
  )}`;

  return (
    <div className={styles.VideoPlayerYouTube}>
      <iframe allowFullScreen src={iframeSrc} title={title} frameBorder={0} />
    </div>
  );
};

export default VideoPlayerYouTube;
