// /src/navigation/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoginView from "../screens/LoginView";
import ChatView from "../screens/ChatView";

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Login"
                component={LoginView}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                    headerShown: false, // Hide the header for Login screen
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatView}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubble" size={size} color={color} />
                    ),
                    headerShown: false, // Hide the header for Chat screen
                    tabBarLabel: "Chat",
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;
