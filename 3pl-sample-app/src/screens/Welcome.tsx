// src/screens/Welcome.tsx
import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

type Props = {
  onNavigate: (to: 'welcome' | 'signin' | 'signup' | 'home', opts?: { user?: any }) => void;
};

const { height } = Dimensions.get('window');

const Welcome: React.FC<Props> = ({ onNavigate }) => {
  const slide = useRef(new Animated.Value(height * 0.3)).current;
  const fade = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.75)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(slide, { toValue: 0, duration: 700, useNativeDriver: true }),
        Animated.timing(fade, { toValue: 1, duration: 900, useNativeDriver: true }),
        Animated.spring(logoScale, { toValue: 1, friction: 6, useNativeDriver: true }),
      ]),
    ]).start();
  }, [slide, fade, logoScale]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoWrap, { transform: [{ translateY: slide }, { scale: logoScale }] }]}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
      </Animated.View>

      <Animated.View style={[styles.textWrap, { opacity: fade }]}>
        <Text style={styles.title}>3PL Dynamics</Text>
        <Text style={styles.subtitle}>Smart warehousing • Shipping • Tracking</Text>
      </Animated.View>

      <Animated.View style={[styles.buttonsWrap, { opacity: fade }]}>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => onNavigate('signin')}>
          <Text style={styles.primaryTxt}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ghostBtn} onPress={() => onNavigate('signup')}>
          <Text style={styles.ghostTxt}>Create Account</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#f8fafc', padding: 24 },
  logoWrap: { alignItems: 'center', marginTop: 40 },
  logo: { width: 200, height: 200, borderRadius: 20 },
  textWrap: { alignItems: 'center' },
  title: { fontSize: 32, fontWeight: '800', color: '#0f172a', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#475569' },
  buttonsWrap: { width: '100%', alignItems: 'center' },
  primaryBtn: { width: '90%', padding: 14, borderRadius: 12, backgroundColor: '#0ea5a4', alignItems: 'center', marginBottom: 12 },
  primaryTxt: { color: '#fff', fontWeight: '700' },
  ghostBtn: { width: '90%', padding: 12, borderRadius: 12, borderColor: '#0ea5a4', borderWidth: 1, alignItems: 'center' },
  ghostTxt: { color: '#0f172a', fontWeight: '600' },
});
