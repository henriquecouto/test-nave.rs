import React from 'react';
import {Text} from 'react-native';

export default function EditNaverScreen({route}) {
  const {naverId} = route.params;
  return <Text>Hello Edit Naver Screen {naverId}</Text>;
}
