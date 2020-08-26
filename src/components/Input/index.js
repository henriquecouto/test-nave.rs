import React from 'react';
import {Field, Container, Label} from './styles';

export default function Input({label, value}) {
  return (
    <Container>
      <Label>{label}</Label>
      <Field placeholder={label} />
    </Container>
  );
}
