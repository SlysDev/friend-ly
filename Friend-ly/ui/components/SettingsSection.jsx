import React from "react";
import { View, Text } from "react-native";

const SettingsSection = ({ title, children }) => (
  <View style={{ marginVertical: 10, paddingHorizontal: 16 }}>
    <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>{title}</Text>
    {children}
  </View>
);

export default SettingsSection;