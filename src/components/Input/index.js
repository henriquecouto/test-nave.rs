import React from 'react';
import {Field, Container, Label} from './styles';

export default function Input({label, value, ...otherProps}) {
  return (
    <Container>
      <Label>{label}</Label>
      <Field placeholder={label} {...otherProps} />
    </Container>
  );
}
