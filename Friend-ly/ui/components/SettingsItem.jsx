import React, { useContext } from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";
import { SettingsContext } from "../context/SettingsContext";

const SettingsItem = ({ label, settingKey, type, options, onPress }) => {
  const { settings, updateSetting } = useContext(SettingsContext);

  // Handle updates based on setting type
  const handleChange = (value) => {
    updateSetting(settingKey, value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      {/* Toggle Switch for Boolean Settings */}
      {type === "switch" && (
        <Switch
          value={settings[settingKey]}
          onValueChange={handleChange}
        />
      )}

      {/* Dropdown for Multi-option Settings */}
      {type === "dropdown" && (
        <TouchableOpacity onPress={onPress} style={styles.dropdown}>
          <Text>{settings[settingKey]}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  label: {
    fontSize: 16,
  },
  dropdown: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
});

export default SettingsItem;