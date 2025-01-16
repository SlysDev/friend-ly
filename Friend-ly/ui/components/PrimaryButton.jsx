import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import appColors from "../common/app-colors";

const PrimaryButton = ({
    text,
    onPress,
    width = 180,
    height = 60,
    color = appColors.UW_Purple,
    style,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    width: width,
                    height: height,
                    backgroundColor: color,
                    borderRadius: height / 2,
                },
                style,
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
        borderRadius: 5,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default PrimaryButton;

