import React from 'react';
import {StatusBar, SafeAreaView, ScrollView, Text} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Hello Nave Test</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
