import React from 'react';

import {Container, Logo, Form} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function LoginScreen() {
  return (
    <Container>
      <Logo />
      <Form>
        <Input label="E-mail" />
        <Input label="Senha" />
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}
