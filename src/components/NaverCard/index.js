import React from 'react';
import {Text} from 'react-native';

import {Container, ProfilePicture} from './styles';

export default function NaverCard({item}) {
  return (
    <Container>
      <ProfilePicture source={{uri: item.url}} />
      <Text>{JSON.stringify(item)}</Text>
    </Container>
  );
}
