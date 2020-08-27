import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import Router from './src/router';
import defaultTheme from './src/styles/themes/default';
import {UserContextProvider} from './src/contexts/user-context';

const App = () => {
  return (
    <UserContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar
          backgroundColor={defaultTheme.palette.background}
          barStyle="dark-content"
        />
        <Router />
      </ThemeProvider>
    </UserContextProvider>
  );
};

export default App;
