import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/PrimaryButton';
import appColors from '../common/app-colors'; // Import your appColors

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }
    console.log('Login submitted:', { email, password });
  };

  return (
    <View style={styles.container}>
      <Button text="Login" onPress={onSubmit} /> {/* Style button */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: appColors.Grey_100, // Lighter input background
    color: appColors.Black, // Text color for inputs
    borderRadius: 10, // Rounded corners
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: appColors.Black, // Add a slight shadow for better focus
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default LoginForm;