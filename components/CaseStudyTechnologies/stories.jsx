import React from 'react';
import { storiesOf } from '@storybook/react';

import technologies from 'data/portfolio/technologies.json';

import CaseStudyTechnologies from '.';

const TECHNOLOGIES = Object.keys(technologies);

storiesOf('Page, Case Study: Technologies', module)
  .add('default', () => (
    <CaseStudyTechnologies technologies={TECHNOLOGIES} />
  ));
