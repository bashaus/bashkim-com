import React from 'react';
import PropTypes from 'prop-types';
import querystring from 'querystring';

import styles from './styles.scss';

export default function VideoPlayerYouTube(props) {
  const { v, title } = props;

  const iframeSrc = `https://www.youtube-nocookie.com/embed/${v}?${
    querystring.stringify({
      rel: '0',
      hd: '1',
      showinfo: '0',
      showsearch: '0',
      iv_load_policy: '3',
      modestbranding: '1',
      enablejsapi: '1',
      playsinline: '0',
    })
  }`;

  const videoHref = `https://www.youtube.com/watch?${querystring.stringify({ v })}`;

  return (
    <div className={styles.VideoPlayerYouTube}>
      <iframe allowFullScreen src={iframeSrc} title={title}>
        <div>
          <p>
            Your browser may not be able to play this video.
          </p>

          <p>
            <a href={videoHref} target="_blank" rel="noopener noreferrer">
              Watch &quot;
              {title}
              &quot; on YouTube
            </a>
            .
          </p>
        </div>
      </iframe>
    </div>
  );
}

VideoPlayerYouTube.propTypes = {
  v: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
