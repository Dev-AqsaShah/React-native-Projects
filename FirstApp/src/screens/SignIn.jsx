import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput placeholder="Email" placeholderTextColor="#888" style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor="#888" style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don’t have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

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
