import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// TODO: Right workflow?
import { OAuthProvider } from "../server/firebase/firebase"
import { signInWithPopup } from "../server/firebase/firebase"
import { authUser } from '../server/server';


export function Home() {
    const microsoftProvider = new OAuthProvider('microsoft.com')
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
    const authLogin = async() => {
      try {
        const results = await signInWithPopup(auth, microsoftProvider)
        let serverAuth = authUser(results.user.accessToken)
        // TODO: Do we need to do anything if server is authenticated. 
      } catch (err) {
        throw (err)
      }
    }

    return (
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button onChange={authLogin}>Login with UW NetID</Button>
        <StatusBar style="auto" />
        </View>
    )
}

export default Home