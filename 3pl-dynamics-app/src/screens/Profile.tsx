// src/screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

// Use type-safe navigation for RootStack
type ProfileNavProp = NativeStackNavigationProp<RootStackParamList>;

export default function ProfileScreen() {
  const navigation = useNavigation<ProfileNavProp>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/3pl dynamics-logo.jpeg')}
        style={styles.avatar}
      />
      <Text style={styles.name}>3PL Dynamics</Text>
      <Text style={styles.role}>Logistics Manager</Text>

      <Pressable
        style={styles.signOut}
        onPress={() => navigation.replace('Welcome')}
      >
        <Text style={{ color: Colors.primary }}>Sign out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 36,
    backgroundColor: Colors.white,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  name: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },
  role: {
    color: Colors.muted,
    marginTop: 6,
  },
  signOut: {
    marginTop: 20,
  },
});
