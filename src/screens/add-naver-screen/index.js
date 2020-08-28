import React, {useState, useContext} from 'react';
import Typography from '../../components/Typography';
import {Container, ScrollView} from './styles';
import Button from '../../components/Button';
import {createNaver} from '../../helpers/api';
import {UserContext} from '../../contexts/user-context';
import Alert from '../../components/Alert';
import {CommonActions} from '@react-navigation/native';
import FormNaver from '../../components/FormNaver';

export default function AddNaverScreen({navigation}) {
  const [user] = useContext(UserContext);

  const [name, setName] = useState('');
  const [job_role, setJobRole] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [admission_date, setAdmissionDate] = useState('');
  const [project, setProject] = useState('');
  const [url, setUrl] = useState('');

  const [alertNaverSaved, setAlertNaverSaved] = useState(false);

  const callAddNaver = () => {
    const onSuccess = () => {
      setAlertNaverSaved(true);
    };
    const naverData = {name, job_role, birthdate, admission_date, project, url};
    createNaver(naverData, user.token, onSuccess);
  };

  const onCloseAlertNaverSaver = () => {
    setAlertNaverSaved(false);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
  };

  return (
    <ScrollView>
      <Container>
        <Alert
          visible={alertNaverSaved}
          title="Naver adicionado"
          message="Naver adicionado com sucesso!"
          onClose={onCloseAlertNaverSaver}
        />
        <Typography.H1>Adicionar naver</Typography.H1>

        <FormNaver
          state={{
            name,
            job_role,
            birthdate,
            admission_date,
            project,
            url,
          }}
          setState={{
            setName,
            setJobRole,
            setBirthdate,
            setAdmissionDate,
            setProject,
            setUrl,
          }}
        />

        <Button fullWidth onPress={callAddNaver}>
          Salvar
        </Button>
      </Container>
    </ScrollView>
  );
}
