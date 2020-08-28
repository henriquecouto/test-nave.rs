import React, {useState, useContext} from 'react';
import {CommonActions} from '@react-navigation/native';

import {Container, Form} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import {Logo} from '../../../assets/images';
import {UserContext} from '../../contexts/user-context';

export default function LoginScreen({navigation}) {
  const [, {login}] = useContext(UserContext);
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

    login(email, password, onSuccess, onError);
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
