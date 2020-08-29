import React from 'react';
import {Container, Header, Body} from './style';
import DrawerButton from '../DrawerButton';
import Typography from '../Typography';
import Button from '../Button';
import {CommonActions} from '@react-navigation/native';

export default function DrawerContent({navigation, logout}) {
  return (
    <Container>
      <Header>
        <DrawerButton action={navigation.toggleDrawer} />
      </Header>
      <Body>
        <Button
          transparent
          fullWidth
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'Home'}],
              }),
            )
          }>
          <Typography.H1>Navers</Typography.H1>
        </Button>
        <Button
          transparent
          fullWidth
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'Login'}],
              }),
            );
            logout();
          }}>
          <Typography.H1>Sair</Typography.H1>
        </Button>
      </Body>
    </Container>
  );
}
