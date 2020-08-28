import React, {useState} from 'react';
import {CommonActions} from '@react-navigation/native';

import {Container, Form} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {makeLogin} from '../../helpers/actions/auth';
import Alert from '../../components/Alert';
import {Logo} from '../../../assets/images';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const callMakeLoginAction = () => {
    setError('');
    const onSuccess = () => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Home'}],
        }),
      );
    };
    const onError = (errorMessage) => {
      setError(errorMessage);
    };
    makeLogin(email, password, onSuccess, onError);
  };

  return (
    <Container>
      <Logo />
      <Form>
        <Alert
          visible={!!error}
          title="Erro"
          message={error}
          onClose={() => setError('')}
        />
        <Input
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          autoCompleteType="email"
        />
        <Input
          secureTextEntry
          label="Senha"
          value={password}
          onChangeText={setPassword}
          autoCompleteType="password"
        />
        <Button onPress={callMakeLoginAction}>Entrar</Button>
      </Form>
    </Container>
  );
}
