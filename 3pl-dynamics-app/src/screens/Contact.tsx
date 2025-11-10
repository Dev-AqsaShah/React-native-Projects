// src/screens/ContactScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { Colors } from '../theme';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.p}>Support: support@3pldynamics.com</Text>
      <Text style={styles.p}>Phone: +1 555 123 456</Text>

      <Pressable style={styles.button} onPress={() => Linking.openURL('mailto:support@3pldynamics.com')}>
        <Text style={styles.buttonText}>Email Support</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: Colors.white },
  title: { fontSize: 20, fontWeight: '700', color: Colors.primary, marginBottom: 12 },
  p: { color: Colors.muted, marginBottom: 8 },
  button: { marginTop: 16, backgroundColor: Colors.primary, paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: Colors.white, fontWeight: '700' }
});
