import React from 'react';
import {Text} from 'react-native';
import {Grayscale} from 'react-native-color-matrix-image-filters';

import {
  Container,
  ProfilePicture,
  InfoContainer,
  ActionsContainer,
} from './styles';
import Typography from '../Typography';
import Button from '../Button';
import Icon from '../../../assets/icons';

export default function NaverCard({item}) {
  return (
    <Container>
      <Grayscale>
        <ProfilePicture source={{uri: item.url}} />
      </Grayscale>
      <InfoContainer>
        <Typography.Body1>{item.name}</Typography.Body1>
        <Typography.Body2>{item.project}</Typography.Body2>
      </InfoContainer>
      <ActionsContainer>
        <Button transparent dense>
          <Icon.Trash />
        </Button>
        <Button transparent dense>
          <Icon.Edit />
        </Button>
      </ActionsContainer>
    </Container>
  );
}
