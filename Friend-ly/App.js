// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./ui/navigation/TabNavigator"; // Import the TabNavigator

const App = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
};

export default App;
