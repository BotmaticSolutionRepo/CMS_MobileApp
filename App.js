



  // App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

import MainScreen from './app/component/MainScreen';
import LoginScreen from './app/component/Login';
import profile from './app/component/Profile';
import CreateAccountScreen from './app/component/CreateAccount';
import Profile from './app/component/Profile';
import ForgotPassword from './app/component/ForgotPassword';
import { Appearance } from 'react-native';


const Stack = createStackNavigator();
const isdarkmode = Appearance.getColorScheme()=="dark";
const App = () => {

    const checkToken = async () => {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
           console.log("token_____",fcmToken);
           await AsyncStorage.setItem("DeviceToken",fcmToken)
           .then(() => {
            console.log('Token stored successfully');
            // Add your logic for handling successful login or displaying error messages
          })
          .catch(error => {
            console.error('Error storing token:', error);
          });
        } 
       }
       
       checkToken();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{title: 'Create Account',headerStyle: {backgroundColor: isdarkmode?"black":'#FFFFFF',},headerTintColor: '#0078F9', }} />
        <Stack.Screen name="Profile" component={Profile} options={{title: 'Profile',headerStyle: {backgroundColor: isdarkmode?"black":'#FFFFFF',},headerTintColor: '#0078F9', }}/>
        <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{title: 'Forgot Password',headerStyle: {backgroundColor: isdarkmode?"black":'#FFFFFF',},headerTintColor: '#0078F9', }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
