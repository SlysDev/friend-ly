import React, { createContext, useContext, useState } from "react";
import { Appearance } from "react-native";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(Appearance.getColorScheme() === "dark");

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, background: isDark ? "#121212" : "#fff" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);