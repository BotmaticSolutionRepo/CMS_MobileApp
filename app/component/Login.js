import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, Appearance, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeviceInfo from 'react-native-device-info'; // Import the library for fetching device info
import Spinner from 'react-native-loading-spinner-overlay';

import { DefaultStyle } from '../styles/base';

var Environment = require('../../environment.js');

const Login = () => {
  const navigation = useNavigation();

  // const [username, setUsername] = useState('michaeldavis');
  // const [password, setPassword] = useState('Password123');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameerr, setUsernameerr] = useState('');
  const [passworderr, setPassworderr] = useState('');

  const [showpassword, setshowpassword] = useState(true);
  const [deviceId, setDeviceId] = useState('');
  const [isSpinnerVisible, setisSpinnerVisible] = useState(false);


  // useEffect(() => {
  //   fetchDeviceId(); // Fetch device ID when component mounts
  // }, []);

  const fetchDeviceId = async () => {
    const id = await DeviceInfo.getUniqueId();
    const deviceInfo = await DeviceInfo.getDevice();
    console.log('Device ID:', id);
    console.log('Device Info:', deviceInfo); // Log device information
    setDeviceId(id);
  };

  const handleLogin = async () => { 
    console.log('loginnnnnnnnnnnnnnnn',Environment.BASE_URL)
   try {

    let error = 0 ;
    
    if (username == "") {
      setUsernameerr("Please Enter Username");
      error= error+1;
    } else {
      setUsernameerr("");
    }
    if (password == "") {
      setPassworderr("Please Enter Password");
      error=error+1;
    } else {
      setPassworderr("");
    }

      if (error>0) {
        return false;
      }


   
       setisSpinnerVisible(true);
       await fetch(Environment.BASE_URL + "/LoginUser", {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           Username:username.trim(),
           Password:password,
      
                 }),
       })
       .then(response => response.json())
       .then(async(data) => {
         // Handle the response from the login API
         console.log('Loginresponse............:', data);
         if (data.isException) {
           Alert.alert(data.result);
         } else {
           await AsyncStorage.setItem("token",data.token);
           await AsyncStorage.setItem("Username",data.result.UserName);
           if (data.result.Img_Path) {
             await AsyncStorage.setItem("ProfilePath",data.result.Img_Path);
            
           }


            setisSpinnerVisible(false);
           navigation.navigate('BdDashboard', { UserName: data.result.UserName }); // Pass username as a parameter
         }
       })
       
         .catch(error => {
           console.error('Error during login:', error);
         
         });
     
   } catch (error) {
    console.log("errror",error)
   }
   setisSpinnerVisible(false);

  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
        <Spinner
        visible={isSpinnerVisible}
        textContent={('Loading')}
        textStyle={styles.spinnerTextStyle}
        color="#EF6A32"
      // customIndicator={<Image style={styles.logoImage} source={require('../../app/Images/Group111.png')} />}
      />
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
      {usernameerr ?
      <Text style={styles.errorText} onPress={() => navigation.navigate('Forgot Password')}>
        {usernameerr}
      </Text>:null
      }

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
      {passworderr ?
      <Text style={styles.errorText} onPress={() => navigation.navigate('Forgot Password')}>
        {passworderr}
      </Text>:null
      }
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
  errorText: {
    width: '90%',
    paddingHorizontal: 5,
    marginTop:5,
    fontSize: 14,
    alignSelf: 'center',
    color: 'red',
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
