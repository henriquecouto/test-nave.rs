import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.palette.primary};
  margin: 20px 0;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.palette.secondary};
  font-size: 14px;
  font-family: 'Montserrat-SemiBold';
`;
