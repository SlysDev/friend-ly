// App.js
import React from "react";
import { SafeAreaView } from "react-native";
import LoginView from "./ui/screens/LoginView";
import ChatView from "./ui/screens/ChatView";

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ChatView />
        </SafeAreaView>
    );
};

export default App;

