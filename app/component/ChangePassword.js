import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Appearance } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const ChangePassword = () => {

   var color = Appearance.getColorScheme()=='dark'?"#FFFFFF":'#000000';
  const navigation = useNavigation();


  const [email, setemail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    // Implement your logic to handle password change
    navigation.navigate('PersonalInformation');
    // navigation.navigate('WeeklyProgress');


    if (currentPassword && newPassword && confirmNewPassword) {
      if (newPassword === confirmNewPassword) {
        // Passwords match, proceed with the change
        // You can add your logic here, for example, send an API request to change the password
        Alert.alert('Success', 'Password changed successfully!');
      } else {
        Alert.alert('Error', 'New password and confirm password do not match.');
      }
    } else {
      Alert.alert('Error', 'Please fill in all the fields.');
    }
  };
  const handlerest = ()=>{
    navigation.navigate('WeeklyProgressTwo');

  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Email</Text>
     <View style={{flexDirection:'row'}}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={color}
        // secureTextEntry
        value={email}
        onChangeText={text => setemail(text)}
      />
      <Icon name="eye" size={20} color="gray" style={styles.icon} />
     </View>

      <Text style={styles.title}>Current Password</Text>
      <View style={{flexDirection:'row'}}>
      <TextInput
        style={styles.input}
        placeholder="Current Password"
        placeholderTextColor={color}
        secureTextEntry ={true}
        value={currentPassword}
        onChangeText={text => setCurrentPassword(text)}
      />
          <Icon name="user" size={20} color="gray" style={styles.icon} />
      </View>

      <Text style={styles.title}>New Password</Text>
      <View>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        placeholderTextColor={color}
        secureTextEntry={true}
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
          <Icon name="user" size={20} color="gray" style={styles.icon} />
      </View>
      <Text style={{ fontSize: 10, color: 'gray' }}>Must be at least 8 characters</Text>

      <Text style={styles.title}>Confirm New Password</Text>
     <View>
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        placeholderTextColor={color}
        secureTextEntry={true}
        value={confirmNewPassword}
        onChangeText={text => setConfirmNewPassword(text)}
      />
       <Icon name="user" size={20} color="gray" style={styles.icon} />
     </View>
      <Text style={{ fontSize: 10, color: 'gray' }}>Must be at least 8 characters</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: '10%' }}>
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlerest}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Appearance.getColorScheme() == 'dark' ? "#000000" : "#FFFFFF",
    padding: 20,
  },
  title: {
    fontSize: 15,
    color: '#858585',
    marginBottom: 5, marginTop: 20
  },
  input: {
    height: 40,
    borderColor: Appearance.getColorScheme() == 'dark' ?"#FFFFFF":'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 5,
    paddingLeft: 10,
    width: '100%',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top:10
    // marginLeft:24,
  },
  button: {
    backgroundColor: '#007BFF',
    width: '40%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
});

export default ChangePassword;
