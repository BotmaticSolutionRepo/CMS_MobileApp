import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { DefaultStyle } from '../styles/base';

var Environment = require('../../environment.js');

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setshowpassword] = useState(true);


  const handleLogin = async () => {
    console.log("username____", username, "pass__", password, "environment____", Environment, "\n Token____", await AsyncStorage.getItem("DeviceToken"));
    if (username == "" || password == "") {
      Alert.alert("enter username and password")
      return false
    } else {

    }

    // Perform login using the credentials (username and password)
    // Send a request to your login API using the Environment variable
    fetch(Environment.BASE_URL + "/LoginUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        deviceToken: "f01vtc3cTIOf7OL2KKnCRC:APA91bGYnmCbPxaD11WsIEhkwGc5W5VCmENHU1Qyk3RihdM3LooTzjAiHwJrKpJTcmcAWYSjl43ORU1CQJd7Y8MFAxVAUsAweHFThRAFTW-wB9m8z66L4AwvZ3uxj3tkKjByvbpj1cVW",
        requestSource: "mobileapp"
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the login API
        console.log('Login response:', data);
        // Add your logic for handling successful login or displaying error messages
      })
      .catch(error => {
        console.error('Error during login:', error);
        // Handle error scenarios
      });
  };

  const handleProfilePress = () => {
    // Navigate to the 'Profile' screen
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={{ height: '50%', justifyContent: 'flex-end' }}>

        <Image style={styles.logoImage} source={require('../Images/cms.png')} />
      </View>
      <Text style={styles.title}>Track Your Status</Text>

      {/* Username/Email TextInput */}
      <TextInput
        style={styles.inputbox}
        placeholder="Username or Email"
        placeholderTextColor='#3D3939'
        value={username}
        onChangeText={text => setUsername(text)}
      />


      <TextInput
        style={styles.inputbox}
        placeholder="Password"
        placeholderTextColor='#3D3939'
        secureTextEntry={showpassword}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Text style={styles.forgotpass} onPress={() => { navigation.navigate('Forgot Password') }}>Forgot Password?</Text>


      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      {/* 
      <TouchableOpacity style={styles.buttonContainer} onPress={handleProfilePress}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Continue with Phone</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    height: '100%',
    backgroundColor: Appearance.getColorScheme() == "dark" ? "black" : '#ffffff'
  },
  logoImage: {
    height: DefaultStyle.DEVICE_HEIGHT / 3,
    width: DefaultStyle.DEVICE_WIDTH / 1.1,
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    fontFamily: 'Inter',
    marginBottom: 20,
    textAlign: 'center', color: Appearance.getColorScheme() == "dark" ? "#FFFFFF" : '#000000',
  },
  forgotpass: {
    fontSize: 15, fontFamily: 'intern', color: 'gray', fontWeight: '500', textAlign: 'right', marginRight: 10, marginTop: 10
  },

  loginButton: {
    backgroundColor: '#007BFF',
    height: DefaultStyle.DEVICE_HEIGHT / 20,
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: '#FFFFFF',
    position: 'absolute',
    bottom: DefaultStyle.DEVICE_HEIGHT / 13,
    right: DefaultStyle.DEVICE_HEIGHT / 50  // Align the button to the bottom
  },

  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',

  },

  inputbox: {
    width: DefaultStyle.DEVICE_WIDTH / 1.1,
    height: DefaultStyle.DEVICE_HEIGHT / 20,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    shadowColor: Appearance.getColorScheme() == 'dark' ? null : '#cde5fe',
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    fontSize: 15,
  },
  buttonContainer: {

    width: DefaultStyle.DEVICE_WIDTH / 1.1,
    height: DefaultStyle.DEVICE_HEIGHT / 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: Appearance.getColorScheme() == 'dark' ? "" : '#cde5fe',
    shadowOffset: { width: -2, height: -2, },
    shadowOpacity: 0.9,
    shadowRadius: 10,

  },
  buttonText: {
    color: "black",
    fontWeight: 'bold',
    justifyContent: 'center', fontSize: 14

  },
});

export default Login;
