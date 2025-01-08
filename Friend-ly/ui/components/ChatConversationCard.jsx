import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import UserAvatar from "./UserAvatar";

const ChatConversationCard = ({
    senderName,
    lastMessage,
    timestamp,
    onPress,
}) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.cardContent}>
                <UserAvatar username={senderName} />
                <View style={styles.textContainer}>
                    <Text style={styles.senderName}>{senderName}</Text>
                    <Text style={styles.lastMessage} numberOfLines={1}>
                        {lastMessage}
                    </Text>
                </View>
            </View>
            <Text style={styles.timestamp}>{timestamp}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 15,
        flexDirection: "row", // Layout children in a row
        padding: 15,
        alignItems: "center", // Vertically center items
        justifyContent: "space-between", // Space between cardContent and timestamp
    },
    cardContent: {
        flexDirection: "row", // Layout children in a row
        alignItems: "center", // Vertically center items in cardContent
        flex: 1, // Allow text to shrink if necessary
    },
    textContainer: {
        marginLeft: 12, // Add spacing between the avatar and text
        flex: 1, // Allow lastMessage to take remaining space
    },
    senderName: {
        fontSize: 16,
        fontWeight: "600", // Slightly bolder text
        color: "#222", // Darker text for contrast
    },
    lastMessage: {
        fontSize: 14,
        color: "#555", // Medium gray for less emphasis
        marginTop: 4, // Space between senderName and lastMessage
    },
    timestamp: {
        fontSize: 12,
        color: "#999", // Subtle gray for timestamp
        marginLeft: 8, // Add a little spacing to avoid cramping
        textAlign: "right",
    },
});

export default ChatConversationCard;

