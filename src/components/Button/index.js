import React from 'react';

import {Container, Text} from './styles';

export default function Button({children}) {
  return (
    <Container activeOpacity={0.8}>
      <Text>{children}</Text>
    </Container>
  );
}
