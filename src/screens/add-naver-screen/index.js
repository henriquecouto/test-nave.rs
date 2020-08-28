import React, {useState, useContext} from 'react';
import Typography from '../../components/Typography';
import {Container, ScrollView} from './styles';
import Input, {MaskedInput} from '../../components/Input';
import Button from '../../components/Button';
import {createNaver} from '../../helpers/api';
import {UserContext} from '../../contexts/user-context';
import Alert from '../../components/Alert';
import {CommonActions} from '@react-navigation/native';

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

        <Input label="Nome" value={name} onChangeText={setName} />
        <Input label="Cargo" value={job_role} onChangeText={setJobRole} />
        <MaskedInput
          label="Idade"
          value={birthdate}
          onChangeText={setBirthdate}
          type="datetime"
          options={{format: 'DD/MM/YYYY'}}
        />
        <MaskedInput
          label="Tempo de empresa"
          value={admission_date}
          onChangeText={setAdmissionDate}
          type="datetime"
          options={{format: 'DD/MM/YYYY'}}
        />
        <Input
          label="Projetos que participou"
          value={project}
          onChangeText={setProject}
        />
        <Input label="URL da foto do naver" value={url} onChangeText={setUrl} />

        <Button fullWidth onPress={callAddNaver}>
          Salvar
        </Button>
      </Container>
    </ScrollView>
  );
}
