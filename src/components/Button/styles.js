import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  height: 40px;
  background-color: ${(props) =>
    props.transparent ? '#0000' : props.theme.palette.primary};
  margin: ${(props) => (props.dense ? '0' : '20px 0')};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${(props) =>
    props.transparent
      ? props.theme.palette.primary
      : props.theme.palette.secondary};
  font-size: 14px;
  font-family: 'Montserrat-SemiBold';
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
`;
