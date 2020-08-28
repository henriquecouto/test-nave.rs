import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import {Container} from './styles';

export default function Loading() {
  const theme = useTheme();
  return (
    <Container>
      <ActivityIndicator size="large" color={theme.palette.primary} />
    </Container>
  );
}
