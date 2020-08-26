import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Router from './src/router';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
