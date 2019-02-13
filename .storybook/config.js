import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import { version } from 'package.json';

// automatically import all files stories.jsx or *.stories.jsx
const components = require.context('../components/', true, /\/(\w+\.)?stories.jsx$/);
const styleguide = require.context('../styleguide/', true, /\/(\w+\.)?stories.jsx$/);

function loadStories() {
  components.keys().forEach(filename => components(filename));
  styleguide.keys().forEach(filename => styleguide(filename));

  require('../styleguide/main.scss');
  require('./storybook.scss');
}

configure(loadStories, module);

setOptions({
  name: `bashkim.com v${version}`,
  url: 'https://www.bashkim.com',

  hierarchyRootSeparator: /\:\s/,
  hierarchySeparator: /\//,

  sidebarAnimations: true
});