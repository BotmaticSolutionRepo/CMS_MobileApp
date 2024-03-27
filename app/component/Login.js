import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, Appearance, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

import { DefaultStyle } from '../styles/base';

var Environment = require('../../environment.js');

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setshowpassword] = useState(true);

  const handleLogin = async () => {
    if (username === "" || password === "") {
      Alert.alert("Enter username and password");
      return false;
    } else {
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
          if (data.isException) {
            Alert.alert(data.result); // Display error message
          } else {
            navigation.navigate('Dashboard'); // Navigate to Dashboard if no exception
          }
        })
        .catch(error => {
          console.error('Error during login:', error);
          // Handle error scenarios
        });
    }
  };

  const handleProfilePress = () => {
    // Navigate to the 'Profile' screen
    navigation.navigate('Profile');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require('../Images/cms.png')} />
        <Text style={styles.title}>Track Your Status</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputbox}
          placeholder="Username or Email"
          placeholderTextColor='#A9A9A9'
          value={username}
          onChangeText={text => setUsername(text)}
        />
         <View style={styles.icon}>
        <Icon name='envelope' size={20} color='green' />
      </View>     
       </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputbox}
          placeholder="Password"
          placeholderTextColor='#A9A9A9'
          secureTextEntry={showpassword}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.icon} onPress={() => setshowpassword(!showpassword)}>
          <Icon name={showpassword ? "eye-slash" : "eye"} size={20} color="green" />
        </TouchableOpacity>
      </View>

      <Text style={styles.forgotpass} onPress={() => navigation.navigate('Forgot Password')}>
        Forgot Password?
      </Text>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Appearance.getColorScheme() == "dark" ? "black" : '#ffffff',
    padding: '5%',
  },
  logoContainer: {
    alignItems: 'center',
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
    textAlign: 'center',
    color: Appearance.getColorScheme() == "dark" ? "#FFFFFF" : '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  inputbox: {
    flex: 1,
    height: DefaultStyle.DEVICE_HEIGHT / 20,
    padding: 10,
    color: Appearance.getColorScheme() == 'dark' ? 'black' : 'black',
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 1,
    shadowColor: Appearance.getColorScheme() == 'dark' ? null : '#cde5fe',
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    fontSize: 15,
  },
  icon: {
    marginLeft: -25,
  },
  forgotpass: {
    fontSize: 15,
    fontFamily: 'intern',
    color: 'gray',
    fontWeight: '500',
    textAlign:'right',
    marginLeft:200,
    //marginRight:2,
    marginTop: 10
  },
  loginButton: {
    backgroundColor: '#007BFF',
    height: DefaultStyle.DEVICE_HEIGHT / 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default Login;
