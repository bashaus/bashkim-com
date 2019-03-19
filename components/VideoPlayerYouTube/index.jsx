import PropTypes from 'prop-types';
import QueryString from 'querystring';
import React from 'react';

import styles from './styles.scss';

export default function VideoPlayerYouTube(props) {
  const { v, title } = props;

  const iframeSrc = `https://www.youtube-nocookie.com/embed/${v}?${
    QueryString.stringify({
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

  return (
    <div className={styles.VideoPlayerYouTube}>
      <iframe allowFullScreen src={iframeSrc} title={title} frameBorder={0} />
    </div>
  );
}

VideoPlayerYouTube.propTypes = {
  v: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
