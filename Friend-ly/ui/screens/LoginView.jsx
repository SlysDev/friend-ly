import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import LoginForm from "../forms/LoginForm";
import { GoogleAuthProvider } from "firebase/auth";
import { signIn } from "firebase/auth";
import { auth } from "../../server/firebase/firebase";
import appColors from "../common/app-colors"; // Import your appColors

const LoginView = ({ navigation }) => {
    const microsoftProvider = new GoogleAuthProvider();

    const authLogin = async () => {
        navigation.navigate("Chat");
        // TODO: Implement mobile-friendly login popup
        // try {
        //     const results = await signInWithRedirect(auth, microsoftProvider);
        //     try {
        //         const response = await fetch("http://localhost:6262/api/auth", {
        //             method: "POST",
        //             headers: { "Content-Type": "application/json" },
        //             body: JSON.stringify({ token: results.user.accessToken }),
        //         });
        //         const data = await response.json();
        //         console.log("Auth response:", data);
        //         return data;
        //     } catch (err) {
        //         console.error("Error during authentication:", err);
        //     }
        // } catch (err) {
        //     throw err;
        // }
    };

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
