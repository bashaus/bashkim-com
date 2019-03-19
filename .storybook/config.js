import { addParameters, addDecorator, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';

import { version } from 'package.json';

addDecorator(withA11y);

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: `bashkim.com v${version}`,
      brandUrl: 'https://www.bashkim.com',
      brandImage: null,
    }),
    isFullscreen: false,
    hierarchyRootSeparator: /\:\s/,
    hierarchySeparator: /\//,
    isToolshown: true,
    sortStoriesByKind: true,
  },

  backgrounds: [
    { name: 'White', value: '#FFFFFF' },
    { name: 'Charcol', value: '#303030' },
    { name: 'Shade Background', value: '#FAFAFA' },
  ],
});

// automatically import all files stories.jsx or *.stories.jsx
const styleguide = require.context('../styleguide/', true, /\/(\w+\.)?stories.jsx$/);
const components = require.context('../components/', true, /\/(\w+\.)?stories.jsx$/);
const prismic = require.context('../libraries/prismic/', true, /\/(\w+\.)?stories.jsx$/);

function loadStories() {
  styleguide.keys().forEach(filename => styleguide(filename));
  components.keys().forEach(filename => components(filename));
  prismic.keys().forEach(filename => prismic(filename));

  require('../styleguide/main.scss');
  require('./storybook.scss');
}

configure(loadStories, module);
