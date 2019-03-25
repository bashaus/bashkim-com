import React from 'react';

import { storiesOf } from '@storybook/react';

import caseStudy from 'data/caseStudies/commodore.json';
import CaseStudyBrick from '%components/CaseStudyBrick';
import Brick from '.';

storiesOf('Components: Brick', module)
  .add('default', () => (
    <Brick
      title="Brick title"
      description="Brick description"
      icon={null}
      href="#"
    />
  ))

  .add('case study', () => (
    <CaseStudyBrick caseStudy={caseStudy} />
  ));
