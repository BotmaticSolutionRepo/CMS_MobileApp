import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Profile = () => {
  // Sample user data
  const user = {
    name: 'Rutik Gubge',
    email: 'basweshwar.g@botmaticsolution.in',
    profileImage: require('../Images/cms.png'), // Replace with the actual path
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
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('FAQs')}>
          <Text style={styles.buttonText}>FAQs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Our Policies')}>
          <Text style={styles.buttonText}>Our Policies</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Support')}>
          <Text style={styles.buttonText}>Support</Text>
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
    backgroundColor: 'white',
    height: '100%',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    elevation:10,backgroundColor:'white',
    borderRadius:10,
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
  },
  userEmail: {
    fontSize: 15,
    color: 'gray',
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation:10,
    marginTop:5,
  },
  buttonText: {
    color: 'black',
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
