import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        Welcome to My App 👋
      </Animated.Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonOutlineText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonOutline: {
    borderColor: '#fff',
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonOutlineText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
