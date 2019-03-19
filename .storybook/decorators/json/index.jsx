import PropTypes from 'prop-types';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactJsonTree from 'react-json-tree';

import styles from './styles.scss';

const THEME = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};

export default function JSONDecorator(props) {
  const { schema } = props;

  return (
    <section className={styles.JSONDecorator}>
      <CopyToClipboard
        text={JSON.stringify(schema, null, 2)}
        onCopy={() => alert('copied')}
      >
        <button className={styles.copyButton}>
          Copy JSON to Clipboard
        </button>
      </CopyToClipboard>

      <div className={styles.jsonTree}>
        <ReactJsonTree data={schema} theme={THEME} invertTheme={false} />
      </div>
    </section>
  );
}

JSONDecorator.propTypes = {
  schema: PropTypes.object.isRequired,
}
