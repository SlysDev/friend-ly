import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../forms/LoginForm';
import { GoogleAuthProvider } from "firebase/auth"
import { signInWithPopup } from "firebase/auth"
import { auth } from '../../server/firebase/firebase';

const LoginView = () => {
    
   const microsoftProvider = new GoogleAuthProvider()
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    
    /* 
      Creates a popup for the user to login. 
      Done through Microsoft, server will check if
      the user is using a uw.edu email. 
    */
    const authLogin = async () => {
      try {
        const results = await signInWithPopup(auth, microsoftProvider)
        try {
          const response = await fetch('http://localhost:6262/api/auth', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ token: results.user.accessToken }),
          });
          const data = await response.json();
          console.log('Auth response:', data);
          return data;
      } catch (err) {
          console.error('Error during authentication:', err);
      }
      // TODO: Do we need to do anything if server is authenticated. 
      } catch (err) {
        throw (err)
      }
      console.log("HI")
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <LoginForm onSubmit={authLogin}/>
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