import React, {useState, useEffect, useContext, useCallback} from 'react';
import {FlatList} from 'react-native';

import {Container, Header} from './styles';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import {loadNavers} from '../../helpers/api';
import {UserContext} from '../../contexts/user-context';
import NaverCard from '../../components/NaverCard';
import Loading from '../../components/Loading';

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
    if (user.token) {
      callLoadNavers();
    }
  }, [user.token, callLoadNavers]);

  if (!user.token) {
    return <Loading />;
  }

  return (
    <Container>
      <Header>
        <Typography.H1>Navers</Typography.H1>
        <Button>Adicionar naver</Button>
      </Header>
      <FlatList
        horizontal={false}
        data={navers}
        renderItem={NaverCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </Container>
  );
}
