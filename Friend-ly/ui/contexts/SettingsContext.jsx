import React, { createContext, useContext, useReducer } from "react";

// Define initial settings state
const initialState = {
  theme: "light", // "light" | "dark"
  notificationsEnabled: true,
  language: "en", // "en" | "es" | "fr", etc.
};

// Reducer to handle settings updates
const settingsReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SETTING":
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};

// Create Context
const SettingsContext = createContext();

// Provider Component
export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  // Function to update any setting dynamically
  const updateSetting = (key, value) => {
    dispatch({ type: "UPDATE_SETTING", key, value });
  };

  return (
    <SettingsContext.Provider value={{ ...state, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom Hook for easier use
export const useSettings = () => {
  return useContext(SettingsContext);
};