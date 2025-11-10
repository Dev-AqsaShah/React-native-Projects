// src/screens/AboutScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About 3PL Dynamics</Text>
      <Text style={styles.p}>
        We provide modern logistics solutions: real-time tracking, route optimisation and transparent operations to help businesses scale.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: Colors.white },
  title: { fontSize: 20, fontWeight: '700', color: Colors.primary, marginBottom: 12 },
  p: { color: Colors.muted, lineHeight: 20 }
});
