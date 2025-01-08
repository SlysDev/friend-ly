import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import appColors from "../common/app-colors";
import ChatConversationCard from "../components/ChatConversationCard";

const ChatView = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Messages</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ChatConversationCard
                    senderName="Jeremy"
                    lastMessage="Hey, how are things?"
                    timestamp="2:45 PM"
                />
                <ChatConversationCard
                    senderName="Alex"
                    lastMessage="Can we reschedule our meeting?"
                    timestamp="1:15 PM"
                />
                <ChatConversationCard
                    senderName="Mia"
                    lastMessage="Don't forget to bring the documents!"
                    timestamp="12:30 PM"
                />
                <ChatConversationCard
                    senderName="Sophia"
                    lastMessage="Thanks for your help yesterday!"
                    timestamp="Yesterday"
                />
                <ChatConversationCard
                    senderName="Liam"
                    lastMessage="What's your plan for the weekend?"
                    timestamp="Sunday"
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.White, // Matches app color scheme
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: appColors.Black, // Text color updated to match app color scheme
        marginVertical: 15,
        textAlign: "center",
    },
    scrollContainer: {
        paddingBottom: 20,
    },
});

export default ChatView;
