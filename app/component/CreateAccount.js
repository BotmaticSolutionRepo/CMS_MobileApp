import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Appearance } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
        {/* <Image style={styles.logoImage} source={require('../Images/cms.png')} /> */}

        <TextInput
          style={styles.buttonContainer}
          placeholder="Name"
          placeholderTextColor='#3D3939'
          value={name}
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.buttonContainer}
          placeholder="Phone Number"
          placeholderTextColor='#3D3939'
          keyboardType="phone-pad"
          value={phone}
          onChangeText={text => setPhone(text)}
        />

        <TextInput
          style={styles.buttonContainer}
          placeholder="Email"
          placeholderTextColor='#3D3939'
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.buttonContainer}
          placeholder="Password"
          placeholderTextColor='#3D3939'
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <TextInput
          style={styles.buttonContainer}
          placeholder="Confirm Password"
          placeholderTextColor='#3D3939'
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleCreateAccount}>
          <Text style={styles.loginButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginLeft: 40, }}>_____________________ or_______________________</Text>
      <View style={{ padding: '5%', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>

        <TouchableOpacity style={styles.buttonContainer} onPress={handleProfilePress}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Continue with Phone</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={[styles.buttonText, { color: '#ffffff' }]}>Already has a account ? </Text>
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
    height: DefaultStyle.DEVICE_HEIGHT / 4,
    width: DefaultStyle.DEVICE_WIDTH / 1.5,
  },


  inputbox: {
    width: DefaultStyle.DEVICE_WIDTH / 1.1,
    height: DefaultStyle.DEVICE_HEIGHT / 20,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    shadowColor: '#cde5fe',
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  buttonContainer: {

    width: DefaultStyle.DEVICE_WIDTH / 1.2,
    height: DefaultStyle.DEVICE_HEIGHT / 22,
    marginTop: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#cde5fe',
    shadowOffset: { width: -2, height: -2, },
    shadowOpacity: 0.8,
    shadowRadius: 5,

  },
  buttonText: {
    color: "black",
    fontWeight: 'bold',
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
    color: Appearance.getColorScheme() == "dark" ? "white" : "black",
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',

  },
});

export default CreateAccount;
