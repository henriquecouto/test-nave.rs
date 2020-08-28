import React, {useState, useContext, useEffect, useCallback} from 'react';
import moment from 'moment';

import {ScrollView, Picture, Body, Item, Footer} from './styles';
import {UserContext} from '../../contexts/user-context';
import {showNaver, removeNaver} from '../../helpers/api';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import Icon from '../../../assets/icons';
import Alert from '../../components/Alert';
import {CommonActions} from '@react-navigation/native';

export default function ViewNaverScreen({route, navigation}) {
  const {naverId} = route.params;
  const [user] = useContext(UserContext);
  const [naver, setNaver] = useState({});
  const [alert, setAlert] = useState({
    visible: false,
  });

  const dateNow = moment();
  const age = dateNow.diff(moment(naver.birthdate), 'years');
  const companyTime = dateNow.diff(moment(naver.admission_date), 'months');

  const cleanAlert = () => setAlert({visible: false});

  const callShowNaver = useCallback(() => {
    showNaver(naverId, user.token, setNaver);
  }, [naverId, user.token]);

  const callRemoveNaver = () => () => {
    const onSuccess = () => {
      const successAlertProps = {
        visible: true,
        onClose: () => {
          cleanAlert();
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Home'}],
            }),
          );
        },
        title: 'Naver excluído',
        message: 'Naver excluído com sucesso!',
      };
      setAlert(successAlertProps);
    };

    removeNaver(naverId, user.token, onSuccess);
  };

  const confirmRemoveNaver = () => {
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

  useEffect(() => {
    callShowNaver();
  }, [callShowNaver]);

  return (
    <ScrollView>
      <Alert {...alert} />
      <Grayscale>
        <Picture source={{uri: naver.url}} />
      </Grayscale>
      <Body>
        <Typography.H1>{naver.name}</Typography.H1>
        <Typography.H2>{naver.job_role}</Typography.H2>
        <Item>
          <Typography.Body1>Idade</Typography.Body1>
          <Typography.Body2>{age} anos</Typography.Body2>
        </Item>
        <Item>
          <Typography.Body1>Tempo de empresa</Typography.Body1>
          <Typography.Body2>{companyTime} meses</Typography.Body2>
        </Item>
        <Item>
          <Typography.Body1>Projetos que participou</Typography.Body1>
          <Typography.Body2>{naver.project}</Typography.Body2>
        </Item>
        <Footer>
          <Button
            transparent
            fullWidth
            withBorders
            flex={1}
            style={{marginRight: 6}}
            onPress={confirmRemoveNaver}>
            <Icon.Trash />
            {'  '} Excluir
          </Button>
          <Button fullWidth withBorders flex={1} style={{marginLeft: 6}}>
            <Icon.EditWhite />
            {'  '} Editar
          </Button>
        </Footer>
      </Body>
    </ScrollView>
  );
}
