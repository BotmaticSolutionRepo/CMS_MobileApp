import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Appearance } from 'react-native';
import { DefaultStyle } from '../styles/base';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  // Sample user data
  const user = {
    name: 'Rutik Gubge',
    email: 'basweshwar.g@botmaticsolution.in',
    profileImage: require('../Images/cms.png'), 
  };

  const handleButtonPress = (buttonName) => {
    // Handle button press actions based on the buttonName
    console.log('Button pressed:', buttonName);
  };

  return (
    <View style={styles.container}>
      {/* User Info Section */}
      <View style={styles.userInfo}>
        <Image style={styles.profileImage} source={user.profileImage} />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        {/* Touchable Opacity Buttons */}
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Personal Information')}>
          <Text style={styles.buttonText}>Personal Information</Text>
          <Icon name="user" size={20} color="green" style={styles.icon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
          <Icon name="gear" size={20} color="green" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('FAQs')}>
          <Text style={styles.buttonText}>FAQs</Text>
          <Icon name="info-circle" size={20} color="green" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Our Policies')}>
          <Text style={styles.buttonText}>Our Policies</Text>
          <Icon name="key" size={20} color="green" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Support')}>
          <Text style={styles.buttonText}>Support</Text>
          <Icon name="support" size={20} color="green" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={() => handleButtonPress('Logout')}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    backgroundColor: Appearance.getColorScheme()=='dark'?"black":'white',
    height: '100%',
  },
  userInfo: {
    width: DefaultStyle.DEVICE_WIDTH / 1.1,
    height: DefaultStyle.DEVICE_HEIGHT / 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:10,
    backgroundColor:Appearance.getColorScheme()=='dark'?"#312E2E":'white',
    borderRadius:10,
    shadowColor: Appearance.getColorScheme()=='dark'?null:'#cde5fe',
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userDetails: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color:Appearance.getColorScheme()=='dark'?'white':'black',
  },
  userEmail: {
    fontSize: 15,
    color: Appearance.getColorScheme()=='dark'?'white':'gray',
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    flexDirection:'row',justifyContent:'space-between',
    backgroundColor: Appearance.getColorScheme()=='dark'?'#312E2E': 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginTop:10,
    shadowColor: Appearance.getColorScheme()=='dark'? null: '#cde5fe',
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  buttonText: {
    color: Appearance.getColorScheme()=='dark'?'white':'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    marginTop:10,elevation:10
  },
  logoutButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Profile;
