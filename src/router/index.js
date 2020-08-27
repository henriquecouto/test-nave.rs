import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/login-screen';
import HomeScreen from '../screens/home-screen';
import {useTheme} from 'styled-components';
import {Logo} from '../../assets/images';

const Stack = createStackNavigator();

export default function Router() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.palette.background,
          },
          headerTitleAlign: 'center',
          headerTitle: (props) => <Logo height={32} {...props} />,
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
