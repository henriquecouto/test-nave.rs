import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from '../screens/login-screen';
import HomeScreen from '../screens/home-screen';
import AddNaverScreen from '../screens/add-naver-screen';

import {useTheme} from 'styled-components';
import {Logo} from '../../assets/images';
import {UserContext} from '../contexts/user-context';
import DrawerButton from '../components/DrawerButton';
import DrawerContent from '../components/DrawerContent';
import Icon from '../../assets/icons';
import ViewNaverScreen from '../screens/view-naver-screen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackRoutes({navigation}) {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Navers"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.palette.background,
        },
        headerLeftContainerStyle: {marginLeft: 17.5},
        headerTitleAlign: 'center',
        headerTitle: (props) => <Logo height={32} {...props} />,
        headerBackImage: () => <Icon.Back />,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: (props) => (
            <DrawerButton {...props} action={navigation.toggleDrawer} />
          ),
        }}
      />
      <Stack.Screen name="AddNaver" component={AddNaverScreen} />
      <Stack.Screen name="ViewNaver" component={ViewNaverScreen} />
    </Stack.Navigator>
  );
}

export default function Router() {
  const [user, {logout}] = useContext(UserContext);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={user.token ? 'Home' : 'Login'}
        drawerContent={(props) => <DrawerContent {...props} logout={logout} />}>
        <Drawer.Screen name="Home" component={StackRoutes} />
        <Drawer.Screen
          options={{headerShown: false, gestureEnabled: false}}
          name="Login"
          component={LoginScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
