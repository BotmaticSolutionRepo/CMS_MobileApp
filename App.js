



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
import WeeklyProgress from './app/component/CustomerPortal/WeeklyProgress';
import UpdateKYC from './app/component/CustomerPortal/ UpdateKYC';
import SupportChat from './app/component/CustomerPortal/SupportChat';
import Notification from './app/component/Notification';
import Faq from './app/component/Faq';
import SupportTeam from './app/component/CustomerPortal/SupportTeam';
import WeeklyProgressTwo from './app/component/CustomerPortal/WeeklyProgressTwo';
import Dashboard from './app/component/CustomerPortal/Dashboard';
import BdDashboard from './app/component/BdDashboard';
import BdFilesReport from './app/component/BdFilesReport';
import BdSearch from './app/component/BdSearch';
import AddFile from './app/component/AddFile';
import Details from './app/component/Details';
import OtherDetails from './app/component/OtherDetails';
import PersonalDetails from './app/component/PersonalDetails';
import MultipleSearch from './app/component/MultipleSearch';
import FileProgress from './app/component/FileProgress';

import Documents from './app/component/CustomerPortal/Documents';
import MyInvestment from './app/component/CustomerPortal/MyInvestment';
import InvestmentDetails from './app/component/CustomerPortal/InvestmentDetails';
import AddInvestment from './app/component/CustomerPortal/AddInvestment';
import ClosedFiles from './app/component/CustomerPortal/ClosedFiles';
import Home from './app/component/CustomerPortal/Home';
import SectionNotification from './app/component/CustomerPortal/SectionNotification';
import Upload from './app/component/CustomerPortal/Upload';







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
        <Stack.Screen name="WeeklyProgress" component={WeeklyProgress} options={{ title: 'Legal Process', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="UpdateKYC" component={UpdateKYC} options={{title: 'Update KYC', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9',  }}  />
        <Stack.Screen name="SupportChat" component={SupportChat} options={{ title: 'Support Chat', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="Notification" component={Notification} options={{ title: 'Notification', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="SupportTeam" component={SupportTeam} options={{ title: 'SupportTeam', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="WeeklyProgressTwo" component={WeeklyProgressTwo} options={{ title: 'Weekly Progress', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown:false }} />
        <Stack.Screen name="BdDashboard" component={BdDashboard} options={{ headerShown:false }} />
        <Stack.Screen name="BdFilesReport" component={BdFilesReport} options={{title: 'Bd Files Report', headerShown:true , }} />
        <Stack.Screen name="BdSearch" component={BdSearch} options={{title: ' All Files', headerShown:true , }} />
        <Stack.Screen name="AddFile" component={AddFile} options={{title: 'File Details', headerShown:true , }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown:false }} />
        <Stack.Screen name="OtherDetails" component={OtherDetails} options={{ headerShown:false }} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} options={{ headerShown:false }} />
        <Stack.Screen name="MultipleSearch" component={MultipleSearch} options={{title: 'Multiple Search', headerShown:true , }} />
        <Stack.Screen name="FileProgress" component={FileProgress} options={{title: 'File Progress', headerShown:true , }} />
        <Stack.Screen name="Documents" component={Documents} options={{title: 'Documents', headerShown:true , }} />
        <Stack.Screen name="MyInvestment" component={MyInvestment} options={{title: 'My Investment', headerShown:true , }} />
        <Stack.Screen name="InvestmentDetails" component={InvestmentDetails} options={{title: 'Investment Details', headerShown:true , }} />
        <Stack.Screen name="AddInvestment" component={AddInvestment} options={{title: 'Add Investment', headerShown:true , }} />
        <Stack.Screen name="ClosedFiles" component={ClosedFiles} options={{title: 'Closed Files', headerShown:true , }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown:false , }} />
        <Stack.Screen name="SectionNotification" component={SectionNotification} options={{title: 'Section Notification', headerShown:true , }} />
        <Stack.Screen name="Upload" component={Upload} options={{ headerShown:false , }} />
        

        


        <Stack.Screen name="NotificationSettings" component={NotificationSettings} options={{ title: 'Notification Settings', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />
        <Stack.Screen name="Faq" component={Faq} options={{ title: 'FAQ', headerStyle: { backgroundColor: isdarkmode ? "black" : '#FFFFFF', }, headerTintColor: '#0078F9', }} />








      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
