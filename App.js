



// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import messaging from '@react-native-firebase/messaging';

import MainScreen from './app/component/MainScreen';
import LoginScreen from './app/component/Login';
import profile from './app/component/Profile';
import CreateAccountScreen from './app/component/CreateAccount';
import Profile from './app/component/Profile';
import ForgotPassword from './app/component/ForgotPassword';
import ChangePassword from './app/component/ChangePassword';
import PersonalInformation from './app/component/PersonalInformation';
import WeeklyProgress from './app/component/WeeklyProgress';
import UpdateKYC from './app/component/ UpdateKYC';
import SupportChat from './app/component/SupportChat';
import Notification from './app/component/Notification';
import Faq from './app/component/Faq';
import SupportTeam from './app/component/SupportTeam';
import WeeklyProgressTwo from './app/component/WeeklyProgressTwo';
import Dashboard from './app/component/Dashboard';
import BdDashboard from './app/component/BdDashboard';
import BdFilesReport from './app/component/BdFilesReport';
import BdSearch from './app/component/BdSearch';
import AddFile from './app/component/AddFile';
import Details from './app/component/Details';
import OtherDetails from './app/component/OtherDetails';
import PersonalDetails from './app/component/PersonalDetails';
import MultipleSearch from './app/component/MultipleSearch';









import NotificationSettings from './app/component/NotificationSettings';







import { Appearance } from 'react-native';


const Stack = createStackNavigator();
const isdarkmode = Appearance.getColorScheme() == "dark";
const App = () => {

  // const checkToken = async () => {
  //   const fcmToken = await messaging().getToken();
  //   if (fcmToken) {
  //     console.log("token_____", fcmToken);
  //     await AsyncStorage.setItem("DeviceToken", fcmToken)
  //       .then(() => {
  //         console.log('Token stored successfully');
  //         // Add your logic for handling successful login or displaying error messages
  //       })
  //       .catch(error => {
  //         console.error('Error storing token:', error);
  //       });
  //   }
  // }

  // checkToken();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ title: 'Create Account', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{ title: 'Forgot Password', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ title: 'Change Password', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="PersonalInformation" component={PersonalInformation} options={{ title: 'Personal Information', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="WeeklyProgress" component={WeeklyProgress} options={{ title: 'WeeklyProgressTwo', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="UpdateKYC" component={UpdateKYC} options={{title: 'Update KYC', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9',  }}  />
        <Stack.Screen name="SupportChat" component={SupportChat} options={{ title: 'Support Chat', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="Notification" component={Notification} options={{ title: 'Notification', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="SupportTeam" component={SupportTeam} options={{ title: 'SupportTeam', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="WeeklyProgressTwo" component={WeeklyProgressTwo} options={{ title: 'WeeklyProgressTwo', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown:false }} />
        <Stack.Screen name="BdDashboard" component={BdDashboard} options={{ headerShown:false }} />
        <Stack.Screen name="BdFilesReport" component={BdFilesReport} options={{title: 'Bd Files Report', headerShown:true , }} />
        <Stack.Screen name="BdSearch" component={BdSearch} options={{title: 'Files', headerShown:true , }} />
        <Stack.Screen name="AddFile" component={AddFile} options={{title: 'File Details', headerShown:true , }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown:false }} />
        <Stack.Screen name="OtherDetails" component={OtherDetails} options={{ headerShown:false }} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} options={{ headerShown:false }} />
        <Stack.Screen name="MultipleSearch" component={MultipleSearch} options={{title: 'Multiple Search', headerShown:true , }} />





        <Stack.Screen name="NotificationSettings" component={NotificationSettings} options={{ title: 'Notification Settings', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="Faq" component={Faq} options={{ title: 'FAQ', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />








      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
