import React from 'react';
import { storiesOf } from '@storybook/react';

import caseStudy from 'data/caseStudies/battersea-looking-for-you.json';

import CaseStudyAccolades from '.';

const EXAMPLE_DEFAULT = [
  {
    issuer: 'Competition or festival',
    description: 'A description of the award issuer',
    date: '2019-01',
    awards: [
      {
        place: 'honour',
        href: '#',
        category: ['This is a conferred honour'],
      },
      {
        place: 'gold',
        href: '#',
        category: ['This is a first-place award'],
      },
      {
        place: 'silver',
        href: '#',
        category: ['This is a second-place award'],
      },
      {
        place: 'bronze',
        href: '#',
        category: ['This is a third-place award'],
      },
      {
        place: 'shortlist',
        href: '#',
        category: ['This is a shortlist award'],
      },
    ],
  },
];

storiesOf('Page, Case Study: Accolades', module)
  .add('default', () => (
    <CaseStudyAccolades accolades={EXAMPLE_DEFAULT} />
  ))

  .add('example', () => (
    <CaseStudyAccolades accolades={caseStudy.accolades} />
  ));
