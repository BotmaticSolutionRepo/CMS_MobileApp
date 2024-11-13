import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Appearance, Alert } from 'react-native';
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
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreateAccount = () => {
    let isValid = true;

    // Check if required fields are empty
    if (!name.trim()) {
      setNameError('required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!phone.trim()) {
      setPhoneError('required');
      isValid = false;
    } else {
      setPhoneError('');
    }
    if (!password.trim()) {
      setPasswordError('required');
      isValid = false;
    } else {
      setPasswordError('');
    }
    

    if (!isValid) {
      return;
    }

    // Validate name
    if (!/^[a-zA-Z]+$/.test(name)) {
      setNameError('Name should only contain alphabets');
      isValid = false;
    } else {
      setNameError('');
    }

    // Validate phone number
    if (!/^\d{10,12}$/.test(phone)) {
      setPhoneError('Phone number should contain 10 to 12 digits');
      isValid = false;
    } else {
      setPhoneError('');
    }

    // Validate password
    if (!/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
      setPasswordError('Password should contain at least one number, one alphabet, one special character, and be at least 8 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      Alert.alert('Passwords Mismatch', 'Password and Confirm Password should match');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Navigate to the Login screen
    Alert.alert('Account Created', 'Your account has been successfully created.', [{ text: 'OK', onPress: () => navigation.navigate('Login') }]);
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
            placeholderTextColor='gray'
            value={name}
            onChangeText={text => setName(text)}
          />
          <Icon name="user" size={20} color="gray" style={styles.icon} />
        </View>
        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor='gray'
            keyboardType="phone-pad"
            value={phone}
            onChangeText={text => setPhone(text)}
          />
          <Icon name="phone" size={20} color='gray' style={styles.icon} />
        </View>
        {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor='gray'
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Icon name="envelope" size={20} color="gray" style={styles.icon} />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor='gray'
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => setPassword(text)}
          />
         <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
    <Icon name={!showPassword ? "eye-slash" : "eye"} size={20} color="green" style={[styles.icon,{top:-10}]} />
  </TouchableOpacity>
        </View>
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor='gray'
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
    <Icon name={!showConfirmPassword ? "eye-slash" : "eye"} size={20} color="green" style={[styles.icon,{top:-10}]} />
  </TouchableOpacity>
        </View>

        {/* Create Account Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleCreateAccount}>
          <Text style={styles.loginButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      {/* Continue with Google and Phone */}
      <Text style={{ marginLeft: 40,marginTop:15 }}>_____________________ or_______________________</Text>
      <View style={{ padding: '5%', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>
        <TouchableOpacity style={styles.buttonContainer}
        //  onPress={handleProfilePress}
         >
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
    alignItems:'center'
    
   // marginBottom:8,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 40,
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
  errorText: {
    color: 'red',
    fontSize: 12,
    bottom:10,
    marginRight:230
    
  },
});

export default CreateAccount;
