import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Using MaterialIcons for the plus icon

const MinimalPlusButton = ({
    onPress,
    size = 40, // Default icon size
    color = "#007AFF", // Default icon color
    style,
}) => {
    return (
        <TouchableOpacity
            style={[styles.iconButton, style]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <MaterialIcons
                name="add"
                size={size}
                color={color}
                style={styles.icon}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        textShadowColor: "rgba(0, 0, 0, 0.2)", // Adds subtle depth
        textShadowOffset: { width: 1, height: 1 },
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },
});

export default MinimalPlusButton;
