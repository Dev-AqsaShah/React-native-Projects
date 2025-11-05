// src/components/haptic-tab.tsx
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

type Props = {
  onPress?: () => void;
  label?: string;
  active?: boolean;
};

const HapticTab: React.FC<Props> = ({ onPress, label = 'Tab', active = false }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrap} accessibilityRole="button">
      <View style={[styles.dot, active && styles.activeDot]} />
      <Text style={[styles.txt, active && styles.activeTxt]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default HapticTab;

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', alignItems: 'center', padding: 8 },
  dot: { width: 8, height: 8, borderRadius: 8, backgroundColor: '#cbd5e1', marginRight: 8 },
  activeDot: { backgroundColor: '#0ea5a4' },
  txt: { color: '#0f172a', fontWeight: '600' },
  activeTxt: { color: '#0ea5a4' },
});
