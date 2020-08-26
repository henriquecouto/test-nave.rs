import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 20px 0;
`;

export const Field = styled.TextInput`
  height: 40px;
  width: 100%;
  border-color: ${(props) => props.theme.palette.primary};
  border-width: 1px;
  font-size: 16px;
  font-family: 'Montserrat-Regular';
`;

export const Label = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 14px;
`;
