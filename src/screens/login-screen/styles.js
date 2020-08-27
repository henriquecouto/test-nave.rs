import styled from 'styled-components/native';
import LogoImage from '../../../assets/images/logo.svg';

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.palette.secondary};
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Logo = styled(LogoImage)`
  width: 156px;
  height: 40px;
  margin: 10px;
  margin-bottom: 50px;
`;

export const Form = styled.View`
  width: 328px;
  height: 236px;
`;
