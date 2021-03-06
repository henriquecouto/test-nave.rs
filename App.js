import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import Router from './src/router';
import defaultTheme from './src/styles/themes/default';
import {UserContextProvider} from './src/contexts/user-context';
import {NaversContextProvider} from './src/contexts/navers-context';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserContextProvider>
        <NaversContextProvider>
          <StatusBar
            backgroundColor={defaultTheme.palette.background}
            barStyle="dark-content"
          />
          <Router />
        </NaversContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
};

export default App;
