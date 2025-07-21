import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

export default function CounterButton({ icon, label, onPress, color }) {
  const { theme } = useTheme();
  
  const styles = createStyles(theme, color);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Ionicons name={icon} size={30} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const createStyles = (theme, color) => StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: color,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.text,
    textAlign: 'center',
  },
});