// src/components/FormInput.tsx
import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';

type Props = {
  label?: string;
} & TextInputProps;

const FormInput: React.FC<Props> = ({ label, style, ...rest }) => {
  return (
    <View style={styles.wrap}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        {...rest}
        style={[styles.input, style]}
        placeholderTextColor="#9ca3af"
        autoCapitalize="none"
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  wrap: { width: '100%', marginBottom: 12 },
  label: { marginBottom: 6, color: '#374151', fontWeight: '600' },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, borderColor: '#e6e9ee', borderWidth: 1 },
});
