import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Appearance } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notification = ({ route }) => {
  const [notifications, setNotifications] = useState(route.params.notification);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.Notification_ID.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notificationItem}>
            <View style={styles.notificationContent}>
              <Image source={require('../Images/cms.png')} style={styles.profileImage} />
              <View style={styles.notificationText}>
                <Text style={styles.description}>{item.Notification_Message}</Text>
                <Text style={styles.timestamp}>{item.Notification_Date_Time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Appearance.getColorScheme() === 'dark' ? 'black' : 'white',
  },
  notificationItem: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: Appearance.getColorScheme() === 'dark' ? 'white' : 'black',
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  notificationText: {
    marginLeft: 10,
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: '#555',
    fontWeight:'bold',
    paddingBottom: 3,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'right',
  },
});

export default Notification;
