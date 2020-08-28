import React from 'react';
import Input, {MaskedInput} from '../../components/Input';

export default function FormNaver({state, setState}) {
  return (
    <>
      <Input label="Nome" value={state.name} onChangeText={setState.setName} />
      <Input
        label="Cargo"
        value={state.job_role}
        onChangeText={setState.setJobRole}
      />
      <MaskedInput
        label="Idade"
        value={state.birthdate}
        onChangeText={setState.setBirthdate}
        type="datetime"
        options={{format: 'DD/MM/YYYY'}}
      />
      <MaskedInput
        label="Tempo de empresa"
        value={state.admission_date}
        onChangeText={setState.setAdmissionDate}
        type="datetime"
        options={{format: 'DD/MM/YYYY'}}
      />
      <Input
        label="Projetos que participou"
        value={state.project}
        onChangeText={setState.setProject}
      />
      <Input
        label="URL da foto do naver"
        value={state.url}
        onChangeText={setState.setUrl}
      />
    </>
  );
}
