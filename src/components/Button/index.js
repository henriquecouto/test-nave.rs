import React from 'react';

import {Container, Text} from './styles';

export default function Button({children, ...otherProps}) {
  return (
    <Container activeOpacity={0.8} {...otherProps}>
      <Text {...otherProps}>{children}</Text>
    </Container>
  );
}
