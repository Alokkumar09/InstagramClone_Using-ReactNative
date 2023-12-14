import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};

export default App;
