import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput placeholder="Full Name" placeholderTextColor="#888" style={styles.input} />
      <TextInput placeholder="Email" placeholderTextColor="#888" style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor="#888" style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.link}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#111',
    color: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
  },
});
