import React from "react";
import { View, ScrollView } from "react-native";
import SettingsSection from "./components/SettingsSection";
import SettingsItem from "./components/SettingsItem";
import { useTheme } from "../context/ThemeContext";

const SettingsView = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
      <SettingsSection title="Account">
        <SettingsItem label="Username" type="navigate" screen="EditUsername" />
        <SettingsItem label="Email" type="navigate" screen="EditEmail" />
      </SettingsSection>

      <SettingsSection title="Preferences">
        <SettingsItem label="Dark Mode" type="toggle" value={theme.isDark} onToggle={toggleTheme} />
        <SettingsItem label="Language" type="dropdown" options={["English", "French", "Spanish"]} />
      </SettingsSection>
    </ScrollView>
  );
};

export default SettingsView;