import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Appearance } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const NotificationSettings = () => {
    const navigation = useNavigation(); 
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] = useState(false);
  const [mailNotificationsEnabled, setMailNotificationsEnabled] = useState(false);
  const [smsNotificationsEnabled, setSmsNotificationsEnabled] = useState(false);
  const [whatsappNotificationsEnabled, setWhatsappNotificationsEnabled] = useState(false);
  const [kishorNotificationsEnabled, setKishorNotificationsEnabled] = useState(false); // New state for kishor notifications

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleEmailNotifications = () => {
    setEmailNotificationsEnabled(!emailNotificationsEnabled);
  };

  const toggleMailNotifications = () => {
    setMailNotificationsEnabled(!mailNotificationsEnabled);
  };

  const toggleSmsNotifications = () => {
    setSmsNotificationsEnabled(!smsNotificationsEnabled);
  };

  const toggleWhatsappNotifications = () => {
    setWhatsappNotificationsEnabled(!whatsappNotificationsEnabled);
  };

  const toggleKishorNotifications = () => { // Functionality for Kishor notifications
    setKishorNotificationsEnabled(!kishorNotificationsEnabled);
  };

  useEffect(() => {
    if (emailNotificationsEnabled) {
      setWhatsappNotificationsEnabled(false);
      setSmsNotificationsEnabled(false);
    }
  }, [emailNotificationsEnabled]);

  useEffect(() => {
    if (mailNotificationsEnabled) {
      setWhatsappNotificationsEnabled(false);
      setSmsNotificationsEnabled(false);
    }
  }, [mailNotificationsEnabled]);
  const handlesave = (buttonName) => {
    navigation.navigate('Profile');
    console.log('Button pressed:', buttonName);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.settingBox}>
          <Text style={styles.settingTitle}>Enable Notifications </Text>
          <Text style={{ fontSize: 14 }}>Allow all Notification </Text>
          <View style={styles.toggleButtonContainer}>
            <TouchableOpacity onPress={toggleNotifications}>
              <View style={[styles.toggleButton, notificationsEnabled ? styles.toggleButtonActive : null]}>
                <Text style={styles.toggleButtonText}>{notificationsEnabled ? 'ON' : 'OFF'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.settingBox}>
          <Text style={styles.settingTitle}>Account Notifications</Text>
          <Text style={styles.settingDescription}>Stay informed about security alerts or service and privacy policy changes by receiving account updates.</Text>
          <View style={styles.toggleContainer}>
            <Text style={styles.settingText}>Email</Text>
            <TouchableOpacity onPress={toggleMailNotifications}>
              <View style={[styles.toggleButton, mailNotificationsEnabled ? styles.toggleButtonActive : null]}>
                <Text style={styles.toggleButtonText}>{mailNotificationsEnabled ? 'ON' : 'OFF'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.settingBox}>
          <Text style={styles.settingTitle}>Social Media Channels</Text>
          <Text style={styles.settingDescription}>Get notified of CMS on below Social Media Channels.</Text>
          <View style={styles.toggleContainer}>
            <Text style={styles.settingText}>Email</Text>
            <TouchableOpacity onPress={toggleEmailNotifications}>
              <View style={[styles.toggleButton, emailNotificationsEnabled ? styles.toggleButtonActive : null]}>
                <Text style={styles.toggleButtonText}>{emailNotificationsEnabled ? 'ON' : 'OFF'}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.toggleContainer}>
            <Text style={styles.settingText}>SMS</Text>
            <TouchableOpacity onPress={toggleSmsNotifications}>
              <View style={[styles.toggleButton, smsNotificationsEnabled ? styles.toggleButtonActive : null]}>
                <Text style={styles.toggleButtonText}>{smsNotificationsEnabled ? 'ON' : 'OFF'}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.toggleContainer}>
            <Text style={styles.settingText}>WhatsApp</Text>
            <TouchableOpacity onPress={toggleWhatsappNotifications}>
              <View style={[styles.toggleButton, whatsappNotificationsEnabled ? styles.toggleButtonActive : null]}>
                <Text style={styles.toggleButtonText}>{whatsappNotificationsEnabled ? 'ON' : 'OFF'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.settingBox}>
          <Text style={styles.settingTitle}>Enable Notification</Text>
          <Text style={styles.settingDescriptionSmall}>Receive timely notifications about app updates, new features.</Text>
          <View style={styles.toggleButtonContainer}>
            <TouchableOpacity onPress={toggleKishorNotifications}>
              <View style={[styles.toggleButton, kishorNotificationsEnabled ? styles.toggleButtonActive : null]}>
                <Text style={styles.toggleButtonText}>{kishorNotificationsEnabled ? 'ON' : 'OFF'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handlesave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor:Appearance.getColorScheme()=='dark'?'black':'white',
  },
  settingBox: {
    backgroundColor:Appearance.getColorScheme()=='dark'?'#787575':'white', 
    padding: 15,
    borderWidth: 0.2,
    borderColor:Appearance.getColorScheme=='dark'?'black':'white',
    marginBottom: 20,
    // borderRadius: 10,
    elevation: 4, // Add elevation for Android
    shadowColor: 'blue', // Add shadow for iOS
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: 'relative', // Add position relative for absolute positioning
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  settingDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  settingDescriptionSmall: {
    fontSize: 14,
    marginTop:3,
    marginBottom: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  settingText: {
    fontSize: 16,
  },
  toggleButton: {
    backgroundColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignContent: 'flex-end',
  },
  toggleButtonContainer: {
    position: 'absolute',
    top: 17,
    right: 10,
  },
  toggleButtonActive: {
    backgroundColor: '#007BFF',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 12, // Adjust size as needed
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotificationSettings;
