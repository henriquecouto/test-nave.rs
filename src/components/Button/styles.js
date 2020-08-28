import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${(props) => props.flex && `flex: ${props.flex}`}
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  height: 40px;
  background-color: ${(props) =>
    props.transparent ? '#0000' : props.theme.palette.primary};
  margin: ${(props) => (props.dense ? '0' : '20px 0')};
  padding: ${(props) => (props.dense ? '5px' : '20px')};
  align-items: center;
  justify-content: center;
  border-width: ${(props) => (props.withBorders ? '2px' : '0')};
  border-style: solid;
  border-color: ${(props) => props.theme.palette.primary};
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
