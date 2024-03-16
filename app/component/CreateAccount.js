import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Appearance } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

import { DefaultStyle } from '../styles/base';

const CreateAccount = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  const handleCreateAccount = () => {
    navigation.navigate('Login');
    // Implement your logic to handle the creation of the account
    // You can use the entered values (name, phone, email, password, confirmPassword)
    console.log('Creating Account:', { name, phone, email, password, confirmPassword });
  };

  const handleProfilePress = () => {
    // Navigate to the 'Profile' screen
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {/* Name Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor='#3D3939'
            value={name}
            onChangeText={text => setName(text)}
          />
          <Icon name="user" size={20} color="black" style={styles.icon} />
        </View>

        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor='#3D3939'
            keyboardType="phone-pad"
            value={phone}
            onChangeText={text => setPhone(text)}
          />
          <Icon name="phone" size={20} color="black" style={styles.icon} />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor='#3D3939'
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Icon name="envelope" size={20} color="black" style={styles.icon} />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor='#3D3939'
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Icon name="lock" size={20} color="black" style={styles.icon} />
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor='#3D3939'
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
          <Icon name="eye" size={20} color="black" style={styles.icon} />
        </View>

        {/* Create Account Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleCreateAccount}>
          <Text style={styles.loginButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      {/* Continue with Google and Phone */}
      <Text style={{ marginLeft: 40, }}>_____________________ or_______________________</Text>
      <View style={{ padding: '5%', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleProfilePress}>
          <Text style={styles.buttonText}>Continue with Google</Text>
          <Icon name="google" size={20} color="red" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Icon name="phone" size={20} color="green" style={styles.icon} />
          <Text style={styles.buttonText}>Continue with Phone</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={[styles.buttonText, { color: 'gray' }]}>Already have an account? </Text>
          <Text style={[styles.buttonText, { color: 'blue' }]} onPress={() => { navigation.navigate('Login') }}>Login</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: Appearance.getColorScheme() == "dark" ? "black" : '#f5f5f5'
  },
  container: {
    padding: '10%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: DefaultStyle.DEVICE_HEIGHT / 2,
    backgroundColor: Appearance.getColorScheme() == "dark" ? "black" : '#f5f5f5'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    position: 'absolute',
    right: 10,
    // marginLeft:24,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 40, // Adjust the paddingRight to accommodate the icon
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'60%',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#cde5fe',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    justifyContent:'space-around'
  },
  buttonText: {
    color: "black",
    fontWeight: 'bold',
    marginLeft:10,
    
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#007BFF',
    width: DefaultStyle.DEVICE_WIDTH / 1.2,
    height: DefaultStyle.DEVICE_HEIGHT / 20,
    padding: 10,
    marginTop: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: Appearance.getColorScheme() == "dark" ? "white" : "black",
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  
  },
});

export default CreateAccount;
