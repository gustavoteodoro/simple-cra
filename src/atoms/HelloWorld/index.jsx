import React from 'react';

import {
  HelloWorldContainer,
  HelloWorldText,
} from './styles';

import {
  hello,
} from './data.json';

function HelloWorld() {
  return (
    <HelloWorldContainer>
      <HelloWorldText>{hello}</HelloWorldText>
    </HelloWorldContainer>
  );
}

export default HelloWorld;
