import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function SettingsScreen() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const { t, currentLanguage, changeLanguage } = useLanguage();

  const showAboutDialog = () => {
    Alert.alert(
      t('about_app'),
      t('app_description'),
      [{ text: t('ok'), style: 'default' }]
    );
  };

  const showLanguageDialog = () => {
    Alert.alert(
      t('notification'),
      t('language_change_soon'),
      [{ text: t('ok'), style: 'default' }]
    );
  };

  const styles = createStyles(theme);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{t('settings')}</Text>
        
        <View style={styles.card}>
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons
                name={isDarkMode ? 'moon' : 'sunny'}
                size={24}
                color={theme.colors.primary}
                style={styles.settingIcon}
              />
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>{t('dark_mode')}</Text>
                <Text style={styles.settingSubtitle}>
                  {isDarkMode ? t('dark_mode') : t('light_mode')}
                </Text>
              </View>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: '#767577', true: theme.colors.primary }}
              thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
            />
          </View>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.settingItem} onPress={showLanguageDialog}>
            <View style={styles.settingInfo}>
              <Ionicons
                name="language"
                size={24}
                color={theme.colors.primary}
                style={styles.settingIcon}
              />
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>{t('language')}</Text>
                <Text style={styles.settingSubtitle}>
                  {currentLanguage === 'ar' ? t('arabic') : t('english')}
                </Text>
              </View>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.settingItem} onPress={showAboutDialog}>
            <View style={styles.settingInfo}>
              <Ionicons
                name="information-circle"
                size={24}
                color={theme.colors.primary}
                style={styles.settingIcon}
              />
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>{t('about_app')}</Text>
                <Text style={styles.settingSubtitle}>{t('version')}</Text>
              </View>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 30,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    marginRight: 15,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginLeft: 59,
  },
});