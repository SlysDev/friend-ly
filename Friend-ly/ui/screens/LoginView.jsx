import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../forms/LoginForm';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../server/firebase/firebase';
import appColors from '../common/app-colors'; // Import your appColors

const LoginView = () => {
  const microsoftProvider = new GoogleAuthProvider();

  const authLogin = async () => {
    try {
      const results = await signInWithPopup(auth, microsoftProvider);
      try {
        const response = await fetch('http://localhost:6262/api/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: results.user.accessToken }),
        });
        const data = await response.json();
        if (!response.ok) {
          // do something!
        }
        console.log('Auth response:', data);
        return data;
      } catch (err) {
        console.error('Error during authentication:', err);
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <View style={{ height: 40 }} />
      <LoginForm onSubmit={authLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.White, // Updated to match app color scheme
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: appColors.Black, // Text color updated to match app color scheme
    marginBottom: 20,
  },
});

export default LoginView;