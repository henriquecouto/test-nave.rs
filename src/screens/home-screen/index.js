import React, {useState, useContext} from 'react';
import {FlatList} from 'react-native';

import {Container, Header} from './styles';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import {removeNaver} from '../../helpers/api';
import {UserContext} from '../../contexts/user-context';
import NaverCard from '../../components/NaverCard';
import Alert from '../../components/Alert';
import {NaversContext} from '../../contexts/navers-context';

export default function HomeScreen({navigation}) {
  const [user] = useContext(UserContext);
  const [navers, {deleteNaver}] = useContext(NaversContext);

  const [alert, setAlert] = useState({
    visible: false,
  });

  const cleanAlert = () => setAlert({visible: false});

  const callRemoveNaver = (naverId) => () => {
    const onSuccess = () => {
      const successAlertProps = {
        visible: true,
        onClose: cleanAlert,
        title: 'Naver excluído',
        message: 'Naver excluído com sucesso!',
      };

      deleteNaver(naverId, () => setAlert(successAlertProps));
    };

    removeNaver(naverId, user.token, onSuccess);
  };

  const confirmRemoveNaver = (naverId) => {
    const alertConfirmRemoveProps = {
      visible: true,
      onClose: cleanAlert,
      onConfirm: callRemoveNaver(naverId),
      title: 'Excluir naver',
      message: 'Tem certeza que deseja excluir este naver?',
      showActions: true,
    };

    setAlert(alertConfirmRemoveProps);
  };

  const viewNaver = (naverId) => {
    navigation.navigate('ViewNaver', {naverId});
  };

  return (
    <Container>
      <Alert {...alert} />
      <Header>
        <Typography.H1>Navers</Typography.H1>
        <Button onPress={() => navigation.navigate('AddNaver')}>
          Adicionar naver
        </Button>
      </Header>
      <FlatList
        horizontal={false}
        data={navers}
        renderItem={(props) => (
          <NaverCard
            {...props}
            removeNaver={() => confirmRemoveNaver(props.item.id)}
            editNaver={() =>
              navigation.navigate('EditNaver', {naverId: props.item.id})
            }
            onPress={() => viewNaver(props.item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </Container>
  );
}
