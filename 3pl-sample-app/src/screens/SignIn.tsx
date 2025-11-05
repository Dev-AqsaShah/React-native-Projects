// src/screens/SignIn.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import FormInput from '../components/FormInput';
import type { User } from '../../App';

type Props = {
  onNavigate: (to: 'welcome' | 'signin' | 'signup' | 'home', opts?: { user?: User }) => void;
};

const SignIn: React.FC<Props> = ({ onNavigate }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const trySignIn = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill email and password');
      return;
    }
    const user: User = { name: email.split('@')[0] || 'User', email };
    onNavigate('home', { user });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.sub}>Welcome back — sign in to continue.</Text>
      </View>

      <View style={styles.form}>
        <FormInput label="Email" value={email} onChangeText={setEmail} placeholder="you@company.com" keyboardType="email-address" />
        <FormInput label="Password" value={password} onChangeText={setPassword} placeholder="••••••••" secureTextEntry />
        <TouchableOpacity style={styles.btn} onPress={trySignIn}>
          <Text style={styles.btnTxt}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => onNavigate('signup')}>
            <Text style={styles.link}>Create one</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8fafc' },
  header: { marginTop: 30, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: '800', color: '#0f172a' },
  sub: { color: '#64748b', marginTop: 6 },
  form: { marginTop: 10 },
  btn: { marginTop: 12, backgroundColor: '#0ea5a4', padding: 14, borderRadius: 10, alignItems: 'center' },
  btnTxt: { color: '#fff', fontWeight: '700' },
  row: { flexDirection: 'row', marginTop: 12, alignItems: 'center' },
  link: { color: '#0ea5a4', fontWeight: '700' },
});
