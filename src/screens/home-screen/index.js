import React, {useState, useEffect, useContext, useCallback} from 'react';

import {Container, Header} from './styles';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import {loadNavers} from '../../helpers/api';
import {UserContext} from '../../contexts/user-context';

export default function HomeScreen() {
  const [user] = useContext(UserContext);
  const [navers, setNavers] = useState([]);

  const callLoadNavers = useCallback(() => {
    const onError = (errorMessage) => {
      console.log(errorMessage);
    };

    loadNavers(user.token, setNavers, onError);
  }, [user.token]);

  useEffect(() => {
    callLoadNavers();
  }, [callLoadNavers]);

  console.log(navers);

  return (
    <Container>
      <Header>
        <Typography.H1>Navers</Typography.H1>
        <Button>Adicionar naver</Button>
      </Header>
    </Container>
  );
}
