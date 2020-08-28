import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.palette.secondary};
  height: 100%;
  align-items: center;
  padding: 16px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
