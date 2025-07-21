import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from 'react-native-async-storage';

const LanguageContext = createContext();

const translations = {
  ar: {
    welcome: 'مرحباً',
    counter: 'العداد',
    increment: 'زيادة',
    decrement: 'تقليل',
    reset: 'إعادة تعيين',
    dark_mode: 'الوضع المظلم',
    light_mode: 'الوضع المضيء',
    settings: 'الإعدادات',
    home: 'الرئيسية',
    language: 'اللغة',
    arabic: 'العربية',
    english: 'الإنجليزية',
    about_app: 'حول التطبيق',
    version: 'الإصدار 1.0.0',
    ok: 'موافق',
    notification: 'إشعار',
    language_change_soon: 'سيتم إضافة تغيير اللغة قريباً',
    app_description: 'تطبيق React Native مع Expo\nالإصدار 1.0.0',
  },
  en: {
    welcome: 'Welcome',
    counter: 'Counter',
    increment: 'Increment',
    decrement: 'Decrement',
    reset: 'Reset',
    dark_mode: 'Dark Mode',
    light_mode: 'Light Mode',
    settings: 'Settings',
    home: 'Home',
    language: 'Language',
    arabic: 'Arabic',
    english: 'English',
    about_app: 'About App',
    version: 'Version 1.0.0',
    ok: 'OK',
    notification: 'Notification',
    language_change_soon: 'Language change will be added soon',
    app_description: 'React Native app with Expo\nVersion 1.0.0',
  },
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('ar');

  useEffect(() => {
    loadLanguage();
  }, []);

  const loadLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        setCurrentLanguage(savedLanguage);
      }
    } catch (error) {
      console.error('Error loading language:', error);
    }
  };

  const changeLanguage = async (language) => {
    setCurrentLanguage(language);
    try {
      await AsyncStorage.setItem('language', language);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      changeLanguage, 
      t,
      isRTL: currentLanguage === 'ar'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};