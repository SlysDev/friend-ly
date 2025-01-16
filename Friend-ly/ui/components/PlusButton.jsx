import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Using MaterialIcons for a bold and modern look

const PlusButton = ({
    onPress,
    size = 60, // Slightly larger for better usability
    color = "#007AFF", // iOS-inspired blue
    iconColor = "#FFFFFF",
    style,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    width: size,
                    height: size,
                    backgroundColor: color,
                    borderRadius: size / 2,
                },
                style,
            ]}
            onPress={onPress}
            activeOpacity={0.85}
        >
            <View>
                <MaterialIcons
                    name="add"
                    size={size * 0.5}
                    color={iconColor}
                    style={styles.icon}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
    },
    icon: {
        textShadowColor: "rgba(0, 0, 0, 0.2)", // Adds a subtle shadow for the icon
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
});

export default PlusButton;
