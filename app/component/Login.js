import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { DefaultStyle } from '../styles/base';

var Environment = require('../../environment.js');

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setshowpassword] = useState(false);


  const handleLogin = async() => {
    console.log("username____",username,"pass__",password,"environment____",Environment,"\n Token____",await AsyncStorage.getItem("DeviceToken"));
   if (username==""||password=="") {
    Alert.alert("enter username and password")
    return false
   } else {
    
   }
   
    // Perform login using the credentials (username and password)
    // Send a request to your login API using the Environment variable
    fetch(Environment.BASE_URL+"/LoginUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        deviceToken:"f01vtc3cTIOf7OL2KKnCRC:APA91bGYnmCbPxaD11WsIEhkwGc5W5VCmENHU1Qyk3RihdM3LooTzjAiHwJrKpJTcmcAWYSjl43ORU1CQJd7Y8MFAxVAUsAweHFThRAFTW-wB9m8z66L4AwvZ3uxj3tkKjByvbpj1cVW",
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
    <View style={{padding:'5%', backgroundColor:Appearance.getColorScheme()=='dark'?'black':"white" ,height:'100%'}}>
     <Image style={styles.logoImage} source={require('../Images/cms.png')} />
      <Text style={styles.title}>Track Your Status</Text>

      {/* Username/Email TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      {/* Password TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={showpassword}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Continue with Google */}
      <TouchableOpacity style={styles.continueWithButton} onPress={handleProfilePress}>
        <Text style={styles.continueWithButtonText}>Profile</Text>
      </TouchableOpacity>

      {/* Continue with Phone */}
      <TouchableOpacity style={styles.continueWithButton}>
        <Text style={styles.continueWithButtonText}>Continue with Phone</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // padding: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  logoImage: {
    height: DefaultStyle.DEVICE_HEIGHT / 2.5,
    width: DefaultStyle.DEVICE_WIDTH / 1.1,
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
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
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom:30,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  continueWithButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    shadowColor:'#5eaef7',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    elevation:10
  },
  continueWithButtonText: {
    color: 'black',
    fontWeight:'500'
  },
});

export default Login;
