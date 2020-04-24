import React from 'react';

import { storiesOf } from '@storybook/react';

import Logo from '.';

const stories = storiesOf('Components: Logo', module);

stories.add('default', (): JSX.Element => <Logo />);
