import React, { useState ,useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Appearance, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import {PermissionsAndroid, Platform} from 'react-native';
import SmsListener from 'react-native-android-sms-listener';
import SmsAndroid from 'react-native-get-sms-android'; // Import the SMS library
import { DefaultStyle } from '../styles/base';
var Environment = require('../../environment.js');

const CreateAccount = () => {
  const navigation = useNavigation();

 

  const requestSmsPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_SMS,
          PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
        ]);
        if (
          granted['android.permission.READ_SMS'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.RECEIVE_SMS'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('SMS permissions granted');
        } else {
          console.log('SMS permissions denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    requestSmsPermissions();
  //  try {
  //    const subscription = SmsListener.addListener(message => {
  //      console.log('Incoming message:', message);
  //      const { body } = message; // Extract the body of the SMS
  //      const regex = /Article\s(\w+)\sdelivered\son\s.*\sto\s(.*?)\.\s/;
 
  //      const match = body.match(regex);
 
  //      if (match) {
  //        const trackingNumber = match[1]; // Extracted tracking number
  //        const deliveryLocation = match[2]; // Extracted delivery location
 
  //        console.log('Tracking Number:', trackingNumber);
  //        console.log('Delivery Location:', deliveryLocation);

  //         fetch("https://cmsapi.vyay.live" + "/AddLetterStatus", {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           created_by:trackingNumber,
  //           CommentText:deliveryLocation,
       
  //                 }),
  //       })
  //       .then(response => response.json())
  //       .then(async(data) => {
  //         Alert.alert(data.result);
  //       });


 
  //        // Handle the extracted values as needed (e.g., save to state or database)
  //      } else {
  //        console.log('Message does not match the expected format.');
  //      }
 
  //      // Process the message content here
  //    });
  //  } catch (error) {
  //   console.log("error",error)
  //  }

    // return () => {
    //   subscription.remove(); // Cleanup when the component unmounts
    // };
  }, []);

  const handlesendmsgfromnow = () => {

    try {
      const subscription = SmsListener.addListener(message => {
        console.log('Incoming message:', message);
        const { body } = message; // Extract the body of the SMS
        const regex = /Article\s(\w+)\sdelivered\son\s.*\sto\s(.*?)\.\s/;
  
        const match = body.match(regex);
  
        if (match) {
          const trackingNumber = match[1]; // Extracted tracking number
          const deliveryLocation = match[2]; // Extracted delivery location
  
          console.log('Tracking Number:', trackingNumber);
          console.log('Delivery Location:', deliveryLocation);
 
           fetch("https://cmsapi.vyay.live" + "/AddLetterStatus", {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             created_by:trackingNumber,
             CommentText:deliveryLocation,
        
                   }),
         })
         .then(response => response.json())
         .then(async(data) => {
          console.log('send data :', data.result);
          //  Alert.alert(data.result);
         });
 
 
  
          // Handle the extracted values as needed (e.g., save to state or database)
        } else {
          console.log('Message does not match the expected format.');
        }
  
        // Process the message content here
      });
    } catch (error) {
     console.log("error",error)
    }

  }

  const handlesyncmsg = async () => {
    // Define SMS filter
    const filter = {
      box: 'inbox', // Read inbox messages
      minDate: new Date().getTime() - 7 * 24 * 60 * 60 * 1000, // Messages from the last 7 days
    };

    SmsAndroid.list(
      JSON.stringify(filter),
      (fail) => {
        console.log('Failed to fetch SMS: ', fail);

        Alert.alert('Failed to fetch SMS: ', fail); 
      },
      (count, smsList) => {
        console.log('smsList SMS: ', smsList);

        const messages = JSON.parse(smsList);

        messages.forEach((message) => {
          const regex = /Article\s(\w+)\sdelivered\son\s.*\sto\s(.*?)\.\s/;
          const match = message.body.match(regex);

          if (match) {
            const trackingNumber = match[1]; // Extracted tracking number
            const deliveryLocation = match[2]; // Extracted delivery location

            console.log('Tracking Number:', trackingNumber);
            console.log('Delivery Location:', deliveryLocation);

            // Send data to the API
            fetch('https://cmsapi.vyay.live/AddLetterStatus', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                created_by: trackingNumber,
                CommentText: deliveryLocation,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                Alert.alert(data.result); // Show success message
              })
              .catch((error) => {
                console.error('Error:', error); // Log errors
              });
          }
        });
      }
    );
  };
  


  return (
    <View style={styles.page}>
      <View style={styles.container}>
      

        {/* Create Account Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handlesendmsgfromnow}>
          <Text style={styles.loginButtonText}> Send message from now </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handlesyncmsg}>
          <Text style={styles.loginButtonText}> Sync Now </Text>
        </TouchableOpacity>
   
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
    height: DefaultStyle.DEVICE_HEIGHT / 10,
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
