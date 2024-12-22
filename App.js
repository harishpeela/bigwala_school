// In App.js in a new project

import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './src/navigation/rootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';


function App() {
  console.log('app.js');

  const navigationRef = useRef(null);
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent={true}
      />
      <RootNavigation />
    </SafeAreaProvider>
  );
}

export default App;