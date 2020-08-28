import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView`
  background-color: ${(props) => props.theme.palette.secondary};
`;

export const Container = styled.View`
  align-items: center;
`;

export const Picture = styled.Image`
  width: 100%;
  height: 288px;
`;

export const Body = styled.View`
  padding: 16px;
`;

export const Item = styled.View`
  padding: 16px 0;
`;

export const Footer = styled.View`
  flex-direction: row;
`;
