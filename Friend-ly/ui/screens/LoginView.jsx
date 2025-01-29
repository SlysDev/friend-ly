import {React, useEffect, useState} from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import LoginForm from "../forms/LoginForm";
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { signIn, signInWithPopup } from "firebase/auth";
import { auth } from "../../server/firebase/firebase";
import appColors from "../common/app-colors"; // Import your appColors

const LoginView = ({ navigation }) => {
    const microsoftProvider = new GoogleAuthProvider();
    const [loggedIn, setLoggedIn] = useState(false)

    const authLogin = async () => {
        // navigation.navigate("Chat");
        // TODO: Implement mobile-friendly login popup
        try {
            const results = await signInWithRedirect(auth, microsoftProvider);
            //setLoggedIn(true)
            try {
                const response = await fetch("http://localhost:6262/api/auth", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token: results.user.accessToken }),
                });
                const data = await response.json();
                
                console.log("Auth response:", data);
                navigation.navigate("Chat")
                //return data;
            } catch (err) {
                console.error("Error during authentication:", err);
            }
        } catch (err) {
            throw err;
        }
    };

    const checkRedirectResult = async () => {
        try {
            console.log("Checking redirect result...");
            const result = await getRedirectResult(auth);
            console.log("Redirect result:", result);
    
            if (result?.user) {
                console.log("User Info from redirect:", result.user);
            } else if (auth.currentUser) {
                
                try {
                    const response = await fetch("http://localhost:6262/api/auth", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ token: auth.currentUser.accessToken }),
                    });
                    const data = await response.json();
                    
                    console.log("Auth response:", data);
                    navigation.navigate("Chat")
                    //return data;
                } catch (err) {
                    console.error("Error during authentication:", err);
                }
                //console.log("User already signed in (fallback):", auth.currentUser);
            } else {
                console.log("No user found.");
            }
        } catch (error) {
            console.error("Error getting redirect result:", error);
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("User already signed in:", user);
            } else {
                console.log("No user session found.");
            }
        });
        checkRedirectResult();
    }, [loggedIn])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome Back!</Text>
            <View style={{ height: 40 }} />
            <LoginForm onSubmit={authLogin} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: appColors.White, // Updated to match app color scheme
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: appColors.Black, // Text color updated to match app color scheme
        marginBottom: 20,
    },
});

export default LoginView;
