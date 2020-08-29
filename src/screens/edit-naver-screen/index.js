import React, {useState, useEffect, useCallback, useContext} from 'react';
import moment from 'moment';

import {Container, ScrollView} from './styles';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import {showNaver, editNaver} from '../../helpers/api';
import {UserContext} from '../../contexts/user-context';
import FormNaver from '../../components/FormNaver';
import Alert from '../../components/Alert';
import {NaversContext} from '../../contexts/navers-context';

export default function EditNaverScreen({route}) {
  const {naverId} = route.params;
  const [user] = useContext(UserContext);
  const [, {updateNaver}] = useContext(NaversContext);

  const [name, setName] = useState('');
  const [job_role, setJobRole] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [admission_date, setAdmissionDate] = useState('');
  const [project, setProject] = useState('');
  const [url, setUrl] = useState('');

  const [alertNaverEdited, setAlertNaverEdited] = useState(false);

  const callShowNaver = useCallback(() => {
    const setNaver = (naverData) => {
      setName(naverData.name);
      setJobRole(naverData.job_role);
      setBirthdate(
        moment(naverData.birthdate).add(12, 'hours').format('DD/MM/YYYY'),
      );
      setAdmissionDate(
        moment(naverData.admission_date).add(12, 'hours').format('DD/MM/YYYY'),
      );
      setProject(naverData.project);
      setUrl(naverData.url);
    };

    showNaver(naverId, user.token, setNaver);
  }, [naverId, user.token]);

  const callEditNaver = () => {
    const onSuccess = (naverData) => {
      updateNaver(naverId, naverData, () => setAlertNaverEdited(true));
    };
    const naverData = {name, job_role, birthdate, admission_date, project, url};
    editNaver(naverId, naverData, user.token, onSuccess);
  };

  useEffect(() => {
    callShowNaver();
  }, [callShowNaver]);

  return (
    <ScrollView>
      <Container>
        <Alert
          visible={alertNaverEdited}
          title="Naver editado"
          message="Naver editado com sucesso!"
          onClose={() => setAlertNaverEdited(false)}
        />
        <Typography.H1>Editar naver</Typography.H1>

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

        <Button fullWidth onPress={callEditNaver}>
          Salvar
        </Button>
      </Container>
    </ScrollView>
  );
}
