import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, SafeAreaView, ScrollView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Hello Nave Test</Text>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
