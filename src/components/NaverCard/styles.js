import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');
const profilePictureSize = screenWidth / 2 - 33;

export const Container = styled.View`
  width: 50%;
  padding: 13px 6px;
`;

export const ProfilePicture = styled.Image`
  flex: 1;
  height: ${profilePictureSize}px;
  width: ${profilePictureSize}px;
`;

export const InfoContainer = styled.View`
  padding: 8px 0;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
