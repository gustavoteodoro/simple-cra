import React from 'react';
import { storiesOf } from '@storybook/react';

import HelloWorld from './index';

storiesOf('Atoms/HelloWorld', module)
  .add('Default', () => (
    <HelloWorld />
  ));
