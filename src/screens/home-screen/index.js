import React, {useState, useEffect, useContext, useCallback} from 'react';
import {FlatList} from 'react-native';

import {Container, Header} from './styles';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import {loadNavers, removeNaver} from '../../helpers/api';
import {UserContext} from '../../contexts/user-context';
import NaverCard from '../../components/NaverCard';
import Loading from '../../components/Loading';
import Alert from '../../components/Alert';

export default function HomeScreen() {
  const [user] = useContext(UserContext);
  const [navers, setNavers] = useState([]);

  const [alertConfirmRemove, setAlertConfirmRemove] = useState({
    visible: false,
  });

  const cleanAlertConfirmRemove = () => setAlertConfirmRemove({visible: false});

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

  const callRemoveNaver = (naverId) => () => {
    const onSuccess = () => {
      callLoadNavers();
      cleanAlertConfirmRemove();
    };

    removeNaver(naverId, user.token, onSuccess);
  };

  const confirmRemoveNaver = (naverId) => {
    const alertProps = {
      visible: true,
      onClose: cleanAlertConfirmRemove,
      onConfirm: callRemoveNaver(naverId),
      title: 'Excluir naver',
      message: 'Tem certeza que deseja excluir este naver?',
      showActions: true,
    };

    setAlertConfirmRemove(alertProps);
  };

  return (
    <Container>
      <Alert {...alertConfirmRemove} />
      <Header>
        <Typography.H1>Navers</Typography.H1>
        <Button>Adicionar naver</Button>
      </Header>
      <FlatList
        horizontal={false}
        data={navers}
        renderItem={(props) => (
          <NaverCard
            {...props}
            removeNaver={() => confirmRemoveNaver(props.item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </Container>
  );
}
