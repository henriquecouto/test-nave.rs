import React from 'react';
import {Field, FieldMasked, Container, Label} from './styles';

export default function Input({label, ...otherProps}) {
  return (
    <Container>
      <Label>{label}</Label>
      <Field placeholder={label} {...otherProps} />
    </Container>
  );
}

export function MaskedInput({label, ...otherProps}) {
  return (
    <Container>
      <Label>{label}</Label>
      <FieldMasked placeholder={label} {...otherProps} />
    </Container>
  );
}
