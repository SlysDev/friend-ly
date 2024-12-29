// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginView from './ui/screens/LoginView';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginView />
    </SafeAreaView>
  );
};

export default App;