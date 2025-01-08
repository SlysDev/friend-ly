import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserAvatar = ({ username, width = 50, height = 50 }) => {
    function generateHexColor(username) {
        let hash = 0;
        for (let i = 0; i < username.length; i++) {
            hash = (hash << 5) - hash + username.charCodeAt(i);
            hash = hash & hash; // Convert to 32bit integer
        }

        let color = "#";
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xff;
            color += value.toString(16).padStart(2, "0");
        }

        return color;
    }

    function isColorDark(hexColor) {
        const r = parseInt(hexColor.substring(1, 3), 16); // Red component
        const g = parseInt(hexColor.substring(3, 5), 16); // Green component
        const b = parseInt(hexColor.substring(5, 7), 16); // Blue component

        // Calculate luminance (standard formula for relative luminance)
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        // Return true if luminance is low (threshold = 128, halfway of 255)
        return luminance < 128;
    }

    const backgroundColor = generateHexColor(username);
    const textColor = isColorDark(backgroundColor) ? "white" : "black";

    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: backgroundColor,
                width: width,
                height: height,
            }}
        >
            <Text style={{ color: textColor, fontWeight: "bold" }}>
                {username[0].toUpperCase()}
            </Text>
        </View>
    );
};

export default UserAvatar;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
});

