import React from 'react';
import renderer from 'react-test-renderer';

import HelloWorld from './index';

it('HelloWorld: renders correctly', () => {
  const tree = renderer
    .create(<HelloWorld />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
