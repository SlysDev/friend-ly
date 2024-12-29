import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../forms/LoginForm';

const LoginView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d1621',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
});

export default LoginView;