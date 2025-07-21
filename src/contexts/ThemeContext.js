import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from 'react-native-async-storage';

const ThemeContext = createContext();

const lightTheme = {
  dark: false,
  colors: {
    primary: '#2196F3',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#000000',
    textSecondary: '#666666',
    border: '#E0E0E0',
    card: '#FFFFFF',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: '#2196F3',
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#AAAAAA',
    border: '#333333',
    card: '#1E1E1E',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('isDarkMode');
      if (savedTheme !== null) {
        setIsDarkMode(JSON.parse(savedTheme));
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    }
  };

  const toggleTheme = async () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    try {
      await AsyncStorage.setItem('isDarkMode', JSON.stringify(newTheme));
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};