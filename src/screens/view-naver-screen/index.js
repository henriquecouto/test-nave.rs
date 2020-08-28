import React from 'react';
import {ScrollView} from './styles';

export default function ViewNaverScreen({route}) {
  const {naverId} = route.params;
  console.log({naverId});

  return <ScrollView></ScrollView>;
}
