import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DefaultStyle } from '../styles/base';

const CreateAccount = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = () => {
    // Implement your logic to handle the creation of the account
    // You can use the entered values (name, phone, email, password, confirmPassword)
    console.log('Creating Account:', { name, phone, email, password, confirmPassword });
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Create Account</Text> */}
      <Image style={styles.logoImage} source={require('../Images/cms.png')} />

      {/* Name TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />

      {/* Phone TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={text => setPhone(text)}
      />

      {/* Email TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      {/* Password TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />

      {/* Confirm Password TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />

      {/* Create Account Button */}
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
    width: '100%',
  },
  logoImage: {
    height: DefaultStyle.DEVICE_HEIGHT / 2.5,
    width: DefaultStyle.DEVICE_WIDTH / 1.1,
},
  createAccountButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  createAccountButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CreateAccount;
