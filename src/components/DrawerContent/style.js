import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.theme.palette.background};
  padding: 5px 17.5px;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  align-items: flex-start;
`;

export const Body = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
