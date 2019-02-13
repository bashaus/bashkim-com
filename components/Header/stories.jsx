import React from 'react';

import { storiesOf } from '@storybook/react';

import { HeaderDisconnected as Header } from '.';

storiesOf('Components: Header', module)
  .add('at top', () => (
    <Header menuIsVisible={false} headerIsIntersecting />
  ))

  .add('at top (portfolio)', () => (
    <Header menuIsVisible={false} headerIsIntersecting theme="portfolio" />
  ))

  .add('at top (about)', () => (
    <Header menuIsVisible={false} headerIsIntersecting theme="about" />
  ))

  .add('at top (blog)', () => (
    <Header menuIsVisible={false} headerIsIntersecting theme="blog" />
  ))

  .add('middle of page', () => (
    <Header menuIsVisible={false} headerIsIntersecting={false} />
  ))

  .add('middle of page (portfolio)', () => (
    <Header menuIsVisible={false} headerIsIntersecting={false} theme="portfolio" />
  ))

  .add('middle of page (about)', () => (
    <Header menuIsVisible={false} headerIsIntersecting={false} theme="about" />
  ))

  .add('middle of page (blog)', () => (
    <Header menuIsVisible={false} headerIsIntersecting={false} theme="blog" />
  ));
