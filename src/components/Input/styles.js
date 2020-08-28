import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';

export const Container = styled.View`
  width: 100%;
  margin: 20px 0;
`;

export const Field = styled.TextInput`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  line-height: 24px;
  height: 40px;
  width: 100%;
  margin: 2px;
  border-color: ${(props) => props.theme.palette.primary};
  border-width: 1px;
`;

export const FieldMasked = styled(TextInputMask)`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  line-height: 24px;
  height: 40px;
  width: 100%;
  margin: 2px;
  border-color: ${(props) => props.theme.palette.primary};
  border-width: 1px;
`;

export const Label = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  margin: 2px;
`;
