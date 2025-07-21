import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useCounter } from '../hooks/useCounter';
import CounterButton from '../components/CounterButton';

export default function HomeScreen({ navigation }) {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const { t } = useLanguage();
  const { count, increment, decrement, reset } = useCounter(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={toggleTheme}
        >
          <Ionicons
            name={isDarkMode ? 'sunny' : 'moon'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, toggleTheme, isDarkMode]);

  const styles = createStyles(theme);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.welcomeText}>{t('welcome')}</Text>
          <Text style={styles.counterLabel}>{t('counter')}</Text>
          
          <View style={styles.counterContainer}>
            <Text style={styles.counterValue}>{count}</Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <CounterButton
            icon="remove"
            label={t('decrement')}
            onPress={decrement}
            color={theme.colors.error}
          />
          <CounterButton
            icon="refresh"
            label={t('reset')}
            onPress={reset}
            color={theme.colors.warning}
          />
          <CounterButton
            icon="add"
            label={t('increment')}
            onPress={increment}
            color={theme.colors.success}
          />
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
    justifyContent: 'center',
  },
  headerButton: {
    marginRight: 15,
    padding: 5,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  counterLabel: {
    fontSize: 20,
    color: theme.colors.textSecondary,
    marginBottom: 20,
    textAlign: 'center',
  },
  counterContainer: {
    backgroundColor: theme.colors.primary + '20',
    borderRadius: 15,
    padding: 20,
    minWidth: 100,
    alignItems: 'center',
  },
  counterValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});