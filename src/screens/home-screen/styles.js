import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.palette.background};
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
