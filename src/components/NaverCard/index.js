import React from 'react';
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
import {TouchableOpacity} from 'react-native';

export default function NaverCard({item, removeNaver, editNaver, onPress}) {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <>
          <Grayscale>
            <ProfilePicture source={{uri: item.url}} />
          </Grayscale>
          <InfoContainer onPress={onPress}>
            <Typography.Body1>{item.name}</Typography.Body1>
            <Typography.Body2>{item.project}</Typography.Body2>
          </InfoContainer>
        </>
      </TouchableOpacity>
      <ActionsContainer>
        <Button transparent dense onPress={removeNaver}>
          <Icon.Trash />
        </Button>
        <Button transparent dense onPress={editNaver}>
          <Icon.Edit />
        </Button>
      </ActionsContainer>
    </Container>
  );
}
